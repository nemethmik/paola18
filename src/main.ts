import "./style.css"
import { LitElement, html, TemplateResult } from "lit"

const app = document.querySelector<HTMLDivElement>("#app")!

app.innerHTML = `
  <h1>Hello Vite Web Components with TypeScript!</h1>
  <p>
    <my-counter></my-counter>
  </p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

    class Counter extends LitElement {
      static get properties():{count:{type:NumberConstructor}} {
        return {
          count: { type: Number },
        }
      }
      count:number
      constructor() {
        super()
        this.count = 0
      }

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

    customElements.define("my-counter", Counter)