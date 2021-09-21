import { LitElement, html, TemplateResult} from "lit"
import {customElement,query} from "lit/decorators.js"
import "@vaadin/vaadin-grid/vaadin-grid.js"
import "@vaadin/vaadin-grid/vaadin-grid-selection-column.js"
import "@vaadin/vaadin-grid/vaadin-grid-sort-column.js"
import type { GridElement } from "@vaadin/vaadin-grid"
import "@ui5/webcomponents/dist/BusyIndicator.js"
import UI5BusyIndicator from "./ui5types/BusyIndicator"
import "@vaadin/vaadin-button"

@customElement("my-vaadinpeople")
class WebPadawanGridExample extends LitElement {
    @query("ui5-busy-indicator",true) busyIndicator!: UI5BusyIndicator
    @query("vaadin-grid") grid!:GridElement
    render():TemplateResult {
        return html`
            <vaadin-grid theme="row-dividers" column-reordering-allowed multi-sort>
                <vaadin-grid-selection-column auto-select frozen></vaadin-grid-selection-column>
                <vaadin-grid-sort-column width="9em" path="firstName"></vaadin-grid-sort-column>
                <vaadin-grid-sort-column width="9em" path="lastName"></vaadin-grid-sort-column>
                <vaadin-grid-column width="9em" path="address.city"></vaadin-grid-column>
            </vaadin-grid>
            <!-- UI5 busy indicator somehow spoils the layout of the Grid-->
            <ui5-busy-indicator size="Medium" text="Loading data ...">
                <span>3 seconds delay for fun. </span>
                <!-- Vaadin layout is not needed to install as a separate package or import it explicitly,
                    Possibly, the layouting components are automatically installed and im[orted as dependencies
                    for some other Vaadin component. 
                -->
                <vaadin-horizontal-layout theme="spacing" style="align-items: baseline">
                    <vaadin-button @click="${():void => {this.loadData(true)}}">Reload</vaadin-button>
                    <vaadin-button @click="${():void => {this.loadData(false)}}">Local</vaadin-button>
                    <vaadin-button @click="${():void => {this.grid.items = []}}">Clear</vaadin-button>
                </vaadin-horizontal-layout>
            </ui5-busy-indicator>
        `
    }
    override firstUpdated():void {this.loadData()}
    /**
     * @fires WebPadawanGridExample#populate
     */
    async loadData(remote = true):Promise<void> {
        this.busyIndicator.active = true 
        try {
            await new Promise((r) => setTimeout(r, 3000))
            const endpoint = remote ? "https://demo.vaadin.com/demo-data/1.0/people?count=200" : "./people.json"
            const res = await fetch(endpoint)
            const data = await res.json()
            this.grid.items = data.result
            this.dispatchEvent(new CustomEvent("populate",{detail:data.result.length}))
        } finally {
            this.busyIndicator.active = false
        }
    }
}
declare global { interface HTMLElementTagNameMap { "my-vaadinpeople": WebPadawanGridExample}}
