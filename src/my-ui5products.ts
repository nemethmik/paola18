import {html, LitElement, TemplateResult} from "lit"
import {customElement,query} from "lit/decorators.js"
import "@ui5/webcomponents/dist/Table.js"
import "@ui5/webcomponents/dist/TableColumn.js"
import "@ui5/webcomponents/dist/Button"
import "@ui5/webcomponents/dist/TableRow.js"
import "@ui5/webcomponents/dist/TableCell.js"
import UI5Table from "./ui5types/Table"

export const TUI5DemoEventType = {positive: "positive", negative: "negative"} as const
export type TUI5DemoEventPayload = {detail:{date:Date,switch:boolean}}
@customElement("my-ui5products")
class ChristianP86 extends LitElement {
    static PRODUCTSTABLE = "productsTable"
    @query("#" + ChristianP86.PRODUCTSTABLE,true) productsTable!: UI5Table
    render():TemplateResult {
        return html`
            <div>
                <ui5-table id=${ChristianP86.PRODUCTSTABLE} no-data-text="No Data" show-no-data
                    mode="SingleSelect" .stickyColumnHeader=${true}>
                    <ui5-table-column slot="columns" style="width: 12rem">
                        <span style="line-height: 1.4rem">Product</span>
                    </ui5-table-column>
                    <ui5-table-column slot="columns" min-width="800" popin-text="Supplier">
                        <span style="line-height: 1.4rem">Supplier</span>
                    </ui5-table-column>
                    <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin>
                        <span style="line-height: 1.4rem">Dimensions</span>
                    </ui5-table-column>
                    <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin>
                        <span style="line-height: 1.4rem">Weight</span>
                    </ui5-table-column>
                    <ui5-table-column slot="columns">
                        <span style="line-height: 1.4rem">Price</span>
                    </ui5-table-column>
                </ui5-table>
            </div>
            <div>
                <ui5-button @click=${this.addData} design="Emphasized">Populate</ui5-button>
                <ui5-button @click=${this.clearData} design="Emphasized">Clear</ui5-button>
            </div>
        `
    }
    /**
     * This is brutally unsafe and risky implementation, since it assumes that the data arrives in exactly the same order 
     * in the JSON as the columns defined in the table, and no more fields than columns.
     */
    async addData():Promise<void> {
        const response = await fetch("./products.json")
        const products = await response.json()
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
        //See https://lit.dev/docs/components/events/ why the need for this 0 timeout await :)
        await new Promise((r) => setTimeout(r, 0))
        this.dispatchEvent(new CustomEvent("populate",{detail:products.length}))
    }
    async clearData():Promise<void> {
        this.productsTable.querySelectorAll("ui5-table-row").forEach((r)=>r.remove())
    }
}
declare global { interface HTMLElementTagNameMap { "my-ui5products": ChristianP86}}