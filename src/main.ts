import "./style.css"
import { LitElement, html, TemplateResult, render } from "lit"
import {customElement,property} from "lit/decorators.js"
const app = document.querySelector<HTMLDivElement>("#app")!
export const mc = document.querySelector("my-counter")!

render(html`
  <h1>Hello Vite Web Components with TypeScript Decorators like @property!</h1>
  <p>
    <my-counter count=5></my-counter>
  </p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`,app)

@customElement("my-counter")
class Counter extends LitElement {
  @property({type:Number}) count = 0
  setCount = (count:number):void => {
    this.count = count
  }
  render():TemplateResult {
    const { count } = this
    return html`
      <h1>Lit Element - Counter</h1>
      <h2>You clicked ${count} times</h2>
      <button type="button" @click=${():void => this.setCount(count - 1)}>Decrement</button>
      <button type="button" @click=${():void => this.setCount(count + 1)}>Increment</button>
    `
  }
}
declare global { interface HTMLElementTagNameMap { "my-counter": Counter}}
