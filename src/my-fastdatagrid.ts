import { LitElement, html, TemplateResult} from "lit"
import {customElement,query} from "lit/decorators.js"
import {
    provideFASTDesignSystem,
    fastDataGridCell,
    fastDataGridRow,
    fastDataGrid,
    DataGrid
} from "@microsoft/fast-components"
provideFASTDesignSystem().register(fastDataGridCell(),fastDataGridRow(),fastDataGrid())

//!!! WARNING: DONT'T UPGRADE TYPESCRIPT to 4.4 SINCE FAST WILL NOT COMPILE!!!
@customElement("my-fastdatagrid")
class FastGridDemo extends LitElement {
    @query("fast-data-grid") dataGrid!:DataGrid
    render():TemplateResult {
        return html`<fast-data-grid style="background:blue;"></fast-data-grid>`
    }
    override firstUpdated():void {this.loadData()}
    /**
     * @fires WebPadawanGridExample#populate
     */
    async loadData():Promise<void> {
        this.dataGrid.rowsData = [
            { item1: "value 1-1", item2: "value 2-1" },
            { item1: "value 1-2", item2: "value 2-2" },
            { item1: "value 1-3", item2: "value 2-3" },
        ]}
}
declare global { interface HTMLElementTagNameMap { "my-fastdatagrid": FastGridDemo}}

    

