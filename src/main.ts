//import "./style.css"
import { html, render, LitElement, TemplateResult } from "lit"
import {customElement,property,query} from "lit/decorators.js"
import "./my-counter"
import "./my-ui5demo"
import {TUI5DemoEventPayload} from "./my-ui5demo"
import "./my-ui5products"
import "@ui5/webcomponents/dist/Toast.js"
import UI5Toast from "./ui5types/Toast"

const app = document.querySelector<HTMLDivElement>("#app")!
render(html`<my-app page="UI5Products"></my-app>`,app)  

type TPageType = "CounterDemo" | "UI5Demo" | "UI5Products"
@customElement("my-app")
class App extends LitElement {
  @property() page:TPageType = "CounterDemo"
  @property({type:Number}) counter = 99
  @query("ui5-toast",true) ui5toast!: UI5Toast
  myCounterPage():TemplateResult { return html`
    <my-counter 
      @increment=${this.onCounterEvent} 
      @decrement=${this.onCounterEvent} 
      count=${this.counter}>
      <h2>The Counter Value is</h2>
    </my-counter>
  `}
  /**
   * @listens PSkelin#negative
   * @listens PSkelin#positive
   * @param e CustomEvent
   */
  ui5DemoListener(e:CustomEvent):void {
    const payload:TUI5DemoEventPayload = e.detail
    //alert(`UI5 Demo Event ${e.type} ${JSON.stringify(payload)}`)
    this.toast(`UI5 Demo Event ${e.type} ${JSON.stringify(payload)}`)
  }
  render(): TemplateResult {
    return html`
      <h1>SAP UI5 Web Components Vite with Lit</h1>
      <button @click=${():void => {this.page = "CounterDemo"}}>Counter</button>
      <button @click=${():void => {this.page = "UI5Demo"}}>UI5 Demo</button>
      <button @click=${():void => {this.page = "UI5Products"}}>UI5 Products</button>
      <p>
        ${this.page === "CounterDemo" ? this.myCounterPage() : ""}
        ${this.page === "UI5Demo" ? html`
          <h3>Counter: ${this.counter}</h3>
          <my-ui5demo @positive=${this.ui5DemoListener} @negative=${this.ui5DemoListener}>
            <div>
              Adding more components? Check the sample page of the component and add the
              corresponding import statement in src/index.js
            </div>
            <p slot="hellodialog">Hello World!</p>
          </my-ui5demo>` : ""}
          ${this.page === "UI5Products" ? html`<my-ui5products 
            @populate=${({detail}):void=>this.toast(detail + " rows loaded")}></my-ui5products>` : ""}  
      </p>
      <ui5-toast>Basic Toast</ui5-toast>
      <a href="https://github.com/nemethmik/paola18" target="_blank">Paola18 Documentation</a>
    `  
  }
  /**
   * @listens Counter#decrement
   * @listens Counter#increment
   */
  async onCounterEvent(e:CustomEvent):Promise<void> {
    this.counter = isNaN(e.detail) ? -9999 : e.detail 
    //See https://lit.dev/docs/components/events/ why the need for this 0 timeout await :)
    //await new Promise((r) => setTimeout(r, 0)) //This is required only before alert()
    //window.alert(`Counter Event ${e.type} to ${e.detail}`)
    this.toast(`Counter Event ${e.type} to ${e.detail}`)
  }
  toast(message:string):void {
    this.ui5toast.innerText = message
    this.ui5toast.show()
  }
}
declare global { interface HTMLElementTagNameMap { "my-app": App}}