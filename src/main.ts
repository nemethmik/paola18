//import "./style.css"
import { html, render, LitElement, TemplateResult } from "lit"
import {customElement,property} from "lit/decorators.js"
import "./my-counter"
import "./my-ui5demo"
import {TUI5DemoEventPayload} from "./my-ui5demo"

const app = document.querySelector<HTMLDivElement>("#app")!
render(html`<my-app page="CounterDemo"></my-app>`,app)  

type TPageType = "CounterDemo" | "UI5Demo"
@customElement("my-app")
class App extends LitElement {
  @property() page:TPageType = "CounterDemo"
  myCounterPage:TemplateResult = html`
    <my-counter 
      @increment=${this.onCounterEvent} 
      @decrement=${this.onCounterEvent} 
      count=99>
    </my-counter>
  `
  /**
   * @listens PSkelin#negative
   * @listens PSkelin#positive
   * @param e CustomEvent
   */
  ui5DemoListener(e:CustomEvent):void {
    const payload:TUI5DemoEventPayload = e.detail
    alert(`UI5 Demo Event ${e.type} ${JSON.stringify(payload)}`)
  }
  render(): TemplateResult {
    return html`
      <h1>Hello Vite Web Components with Lit!</h1>
      <button @click=${():void => {this.page = "CounterDemo"}}>Counter</button>
      <button @click=${():void => {this.page ="UI5Demo"}}>UI5 Demo</button>
      <p>
        ${this.page == "CounterDemo" ? this.myCounterPage : ""}
        ${this.page == "UI5Demo" ? html`
          <my-ui5demo @positive=${this.ui5DemoListener} @negative=${this.ui5DemoListener}>
            <div>
              Adding more components? Check the sample page of the component and add the
              corresponding import statement in src/index.js
            </div>
            <p slot="hellodialog">Hello World!</p>
          </my-ui5demo>` : ""}
      </p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
    `  
  }
  /**
   * @listens Counter#decrement
   * @listens Counter#increment
   */
   onCounterEvent(e:CustomEvent):void {window.alert(`Counter Event ${e.type} to ${e.detail}`)}  
}
declare global { interface HTMLElementTagNameMap { "my-app": App}}