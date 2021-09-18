import {html, LitElement, TemplateResult} from "lit"
import {customElement,query} from "lit/decorators.js"
//import "@ui5/webcomponents/dist/Icon.js"
import "@ui5/webcomponents-icons/dist/Assets.js"
import "@ui5/webcomponents-icons/dist/AllIcons.js"
import "@ui5/webcomponents/dist/Button.js"
import "@ui5/webcomponents/dist/Label.js"
import "@ui5/webcomponents/dist/DatePicker.js"
import UI5DatePicker from "./ui5types/DatePicker"
import "@ui5/webcomponents/dist/MessageStrip.js"
import "@ui5/webcomponents/dist/Dialog.js"
import UI5Dialog from "./ui5types/Dialog"
import "@ui5/webcomponents/dist/Switch.js"
import UI5Switch from "./ui5types/Switch"
import "@ui5/webcomponents/dist/Title.js"

export const TUI5DemoEventType = {positive: "positive", negative: "negative"} as const
export type TUI5DemoEventPayload = {detail:{date:Date,switch:boolean}}
/**
 * @fires PSkelin#positive
 * @fires PSkelin#negative
 */
@customElement("my-ui5demo")
class PSkelin extends LitElement {
    static HELLODIALOG = "hello-dialog"
    static DATEPICKER = "date"
    static SWITCH = "switch"
    @query("#" + PSkelin.HELLODIALOG,true) dialog!: UI5Dialog
    @query("#" + PSkelin.DATEPICKER,true) datepicker!: UI5DatePicker
    @query("#" + PSkelin.SWITCH,true) switch!: UI5Switch
    render():TemplateResult {
        return html`
            <ui5-title>UI5 Web Components are here!</ui5-title>
            <br /><br />
            <ui5-messagestrip design="Warning" no-close-button>
                <slot></slot>
            </ui5-messagestrip>
            <br /><br />
            <ui5-date-picker id=${PSkelin.DATEPICKER} style="width: 300px;"></ui5-date-picker>
            <br /><br />
            <ui5-button design="Positive" @click=${():void=>this.fireEvent("positive")}>Positive</ui5-button>
            <ui5-button design="Negative" @click=${():void=>this.fireEvent("negative")}>Negative</ui5-button>
            <br /><br />
            <ui5-switch id=${PSkelin.SWITCH} design="Graphical" checked></ui5-switch>
            <br />
            <ui5-button @click=${():void=>{this.dialog.show()}}>Open Dialog</ui5-button>
            <br />
            <ui5-dialog id=${PSkelin.HELLODIALOG} header-text="Dialogs are easy!">
            <div stype="padding: 2rem; display:flex; justify-content: center;">
                <slot name="hellodialog"></slot>
                <ui5-button @click=${():void=>this.dialog.close()}>Dismiss</ui5-button>
            </div>
            </ui5-dialog>
        `
    }
    /**
     * @event PSkelin#negative
     * @event PSkelin#positive
     * @param eventType This is a tricky TypeScript type definition keyof typeof TUI5DemoEventType
     */
    fireEvent(eventType:keyof typeof TUI5DemoEventType):void {
        const dpv = this.datepicker.dateValue
        const payload:TUI5DemoEventPayload = {detail:{date:dpv,switch:this.switch.checked}}
        this.dispatchEvent(new CustomEvent(eventType,payload))
    }
}
declare global { interface HTMLElementTagNameMap { "my-ui5demo": PSkelin}}