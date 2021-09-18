//import "./style.css"
import { html, render } from "lit"
import "./my-counter"

const app = document.querySelector<HTMLDivElement>("#app")!
export const mc = document.querySelector("my-counter")!

/**
 * @listens Counter#decrement
 * @listens Counter#increment
 */
function onCounterEvent(e:CustomEvent):void {
  window.alert("Counter Event " + e.detail)
}
render(html`
  <h1>Hello Vite Web Components with TypeScript and Lit!</h1>
  <p>
    <my-counter @decrement=${onCounterEvent} @increment=${onCounterEvent} count=5></my-counter>
  </p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`,app)
