import {html, css, LitElement, TemplateResult} from "lit"
import {customElement,state, query} from "lit/decorators.js"
import "@ui5/webcomponents/dist/Table.js"
//import UI5Table from "./ui5types/Table"
import "@ui5/webcomponents/dist/TableColumn.js"
import "@ui5/webcomponents/dist/Button"
import "@ui5/webcomponents/dist/CheckBox"
import UI5CheckBox from "./ui5types/CheckBox"
import "@ui5/webcomponents/dist/TableRow.js"
import "@ui5/webcomponents/dist/TableCell.js"
import "@ui5/webcomponents/dist/BusyIndicator.js"
import UI5BusyIndicator from "./ui5types/BusyIndicator"

type UI5PoppedColumns = [{
    index: number, 
    popinText: string, 
    demandPopin: boolean
}]
export const TUI5DemoEventType = {positive: "positive", negative: "negative"} as const
export type TUI5DemoEventPayload = {detail:{date:Date,switch:boolean}}
type TProduct = {
    Product: string,
    Supplier: string,
    Dimensions: string,
    Weight: string,
    Price: string,
}
/**
 * Reworked this component to display product rows in a reactive way.
 * The original https://github.com/christianp86/ui5-webcomponents-pure-js/tree/main/blog-series/part-1/ui5-webcomponents-wo-frk
 * was programmed in a traditional imperative way.
 */
@customElement("my-ui5products")
class ChristianP86 extends LitElement {
    static DEFAULTMINWIDTH = 600
    static DEMODELAYFORDATALOAD = 0 //2000
    static BUSYINDICATORDELAY = 1000
    // static PRODUCTSTABLE = "productsTable"
    //static POPINCHECKBOX = "cbpopin"
    // @query("#" + ChristianP86.PRODUCTSTABLE,true) productsTable!: UI5Table
    //@query("#" + ChristianP86.POPINCHECKBOX,true) popin!: HTMLInputElement
    @query("ui5-busy-indicator",true) busyIndicator!: UI5BusyIndicator
    @state() popin = false
    @state() products:TProduct[] = []
    additive = false
    @state() minWidth = ChristianP86.DEFAULTMINWIDTH
    //@state() poppedColumns:UI5PoppedColumns = []
    //colTxt(title:string):TemplateResult {return html`<span style="line-height: 1.4rem">${title}</span>`}
    colTxt(title:string):TemplateResult {return html`${title}`}
    static styles = css`
        header {display: flex; align-items: center; }
    `
    render():TemplateResult {
        console.log(`ChristianP86.render: Number of products ${this.products.length} popin=${this.popin} additive=${this.additive} minWidth ${this.minWidth}`)
        // < id=${ChristianP86.PRODUCTSTABLE}
        return html`
        <ui5-busy-indicator size="Medium" text="Loading data ..." delay=${ChristianP86.BUSYINDICATORDELAY}>
            <div>
                <header>
                    <ui5-checkbox text="Pop In" ?checked=${this.popin} 
                        @change=${(e:Event):void=>{
                            // console.log("Popin Change",e)
                            this.popin = (e.currentTarget as UI5CheckBox).checked
                            //if(this.popin) this.minWidth = ChristianP86.DEFAULTMINWIDTH
                        }}></ui5-checkbox>
                    <ui5-checkbox text="Additive" ?checked=${this.additive} 
                        @change=${(e:Event):void=>{
                            this.additive = (e.currentTarget as UI5CheckBox).checked
                        }}></ui5-checkbox>
                    <ui5-label for="min-width" required show-colon>Min Width</ui5-label>
                    <ui5-input id="min-width" value=${this.minWidth} type=Number maxlength=4
                        @change=${(e:Event):void=>{
                            const v = (e.currentTarget as HTMLInputElement).value
                            this.minWidth = v ? parseInt(v) : 0
                        }}></ui5-input>
                    <ui5-button @click=${this.addData} design="Emphasized">Populate</ui5-button>
                    <ui5-button @click=${this.clearData} design="Emphasized">Clear</ui5-button>
                </header>
                <main>
                    <ui5-table  no-data-text="No Data" show-no-data
                        mode="SingleSelect" .stickyColumnHeader=${true}
                        @popin-change=${(e:CustomEvent):void=>{
                            const poppedColumns = (e.detail as {poppedColumns: UI5PoppedColumns}).poppedColumns
                            console.log(`Popin Change ${JSON.stringify(poppedColumns)} `, e)
                        }}>
                        <ui5-table-column slot="columns" style="width: 12rem">
                            ${this.colTxt("Product")}
                        </ui5-table-column>
                        <ui5-table-column slot="columns" min-width=${this.minWidth} ?demand-popin=${this.popin} > <!-- popin-text="Supplier" -->
                            ${this.colTxt("Supplier")}
                        </ui5-table-column>
                        <ui5-table-column slot="columns" min-width=${this.minWidth} ?demand-popin=${this.popin} > <!-- popin-text="Dim" -->
                            ${this.colTxt("Dimensions")}
                        </ui5-table-column>
                        <ui5-table-column slot="columns" min-width=${this.minWidth} ?demand-popin=${this.popin}> <!-- popin-text="Weight" -->
                            ${this.colTxt("Weight")}
                        </ui5-table-column>
                        <ui5-table-column slot="columns">
                            ${this.colTxt("Price")}
                        </ui5-table-column>
                        ${this.products.map(p=>html`
                            <ui5-table-row>
                                <ui5-table-cell style="color:red;">${p.Product}</ui5-table-cell>
                                <ui5-table-cell>${p.Supplier}</ui5-table-cell>
                                <ui5-table-cell>${p.Dimensions}</ui5-table-cell>
                                <ui5-table-cell><b>${p.Weight}</b></ui5-table-cell>
                                <ui5-table-cell>${p.Price}</ui5-table-cell>
                            </ui5-table-row>
                        `)}
                    </ui5-table>
                </main>
            </div>
        </ui5-busy-indicator>
        `
    }
    async addData():Promise<void> {
        this.busyIndicator.active = true 
        try {
            await new Promise((r) => setTimeout(r, ChristianP86.DEMODELAYFORDATALOAD))
            const response = await fetch("./products.json")
            const data = await response.json()
            if(this.additive) this.products = [...this.products, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data]
            else this.products = data
            /*
            // This was the original brutally unsafe, fragile, imperative implementation, 
            // since it assumed that the data arrives in exactly the same order 
            // in the JSON as the columns defined in the table, and no more fields than columns.
            const table = this.productsTable  //document.querySelector("ui5-table")    
            products.forEach(product => {
                const tableRow = document.createElement("ui5-table-row")
                // @ts-ignore
                for (const [key, value] of Object.entries(product)) {
                    const tableCell = document.createElement("ui5-table-cell")
                    tableCell.innerHTML = "" + value
                    tableRow.append(tableCell)
                }
                table.appendChild(tableRow)
            })
            */
            this.busyIndicator.active = false
            //See https://lit.dev/docs/components/events/ why the need for this 0 timeout await :)
            await new Promise((r) => setTimeout(r, 0))
            this.dispatchEvent(new CustomEvent("populate",{detail:this.products.length}))
        } finally {
            this.busyIndicator.active = false
        }
    }
    async clearData():Promise<void> {
        this.products = []
        //this.productsTable.querySelectorAll("ui5-table-row").forEach((r)=>r.remove())
    }
}
declare global { interface HTMLElementTagNameMap { "my-ui5products": ChristianP86}}