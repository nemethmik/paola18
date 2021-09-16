import './style.css'
import { LitElement, html } from 'lit';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite Web Components!</h1>
  <p>
    <my-counter></my-counter>
  </p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

    class Counter extends LitElement {
      static get properties() {
        return {
          count: { type: Number },
        };
      }

      constructor() {
        super();
        this.count = 0;
      }

      setCount = count => {
        this.count = count;
      };

      render() {
        const { count } = this;
        return html`
          <h1>Lit Element - Counter</h1>
          <h2>You clicked ${count} times</h2>
          <button type="button" @click=${() => this.setCount(count - 1)}>Decrement</button>
          <button type="button" @click=${() => this.setCount(count + 1)}>Increment</button>
        `;
      }
    }

    customElements.define('my-counter', Counter);