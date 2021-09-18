import { LitElement, html, TemplateResult} from "lit"
import {customElement,property} from "lit/decorators.js"

/**
 * @fires Counter#increment
 * @fires Counter#decrement
 */
@customElement("my-counter")
class Counter extends LitElement {
  @property({type:Number}) count = 0
  setCount = (count:number):void => {
    this.count = count
  }
  /**
   * @event Counter#decrement
   */
   render():TemplateResult {
    const { count } = this
    return html`
      <h1>Lit Element - Counter</h1>
      <h2>You clicked ${count} times</h2>
      <button type="button" @click=${():void => {
            this.setCount(count - 1)
            this.dispatchEvent(new CustomEvent("decrement",{detail:this.count}))
          }}>Decrement</button>
      <button type="button" @click=${this.increment}>Increment</button>
    `
  }
  /**
   * @event Counter#increment
   */
  increment():void {
    console.log("increment button clicked")
    this.setCount(this.count + 1)
    this.dispatchEvent(new CustomEvent("increment",{detail:this.count}))
  }
}
declare global { interface HTMLElementTagNameMap { "my-counter": Counter}}
