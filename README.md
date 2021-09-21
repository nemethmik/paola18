# Lit Tools for Making Web Applications (paola18)

Accompanying videos explaining the whole story:
- [Reactive Web Component Programming Lit Element 01 Counter Project Setup with ViteJS](https://youtu.be/hs0oHgLIFLc)
- [Lit Element Counter Sample Project with ViteJS - 02 GitHub Repo from Local Disk](https://youtu.be/wthWv2Q8Rcg)
- [Lit Element Counter Sample with Vitejs - 03 TypeScriptified so Deployed Successfully](https://youtu.be/aIxCrPzieP4)
- [Lit Element TypeScript Decorators for Counter Sample with Vitejs - 04 Final Deployment on Azure](https://youtu.be/FK4uhP4euuE)

Lit Element Counter Sample App on [Azure](https://lively-field-057f5c603.azurestaticapps.net/)

## Part 5 - Getting Started with Vaadin Grid
Vaadin Grid (even the non Pro version) seems, honestly, a lot more flexible than UI5 table; whatever way I love SAP UI5, Vaadin is in a different league: they use the state of the art Lit Element as base component for the entire library, and Vaadin Fusion is their bread-and-butter along with other products. 

In the meantime I had a quick look at Microsoft Fast and the [data-grid component](https://www.fast.design/docs/components/data-grid), and this *data-grid* is disappointing, slightly more than regular HTML table. The FAST technology is brilliant, I can say that it is even more versatile than Lit-HTML and Lit Element, but without a decent data-grid it is totally irrelevant for my projects where a decent grid solution is required. FluentUI Web Componnet is nothing else that Fast Web Components with Fluent UI "design language" (fancy word for look-and-feel).

A major concern with Vaadin web components, however, might be that they are always presented in the context of the entire Vaading system, which includes a Java Spring Boot server, Maven as project orchestration tool. On the other hand, the web components (brand named Vaadin Fusion) are designed to be independent elements that could be used in any application stack. 
- To start experimenting with [Vaadin Fusion](https://vaadin.com/fusion) start on the [Fusion documentation page](https://vaadin.com/docs/latest/fusion/overview).
The [Design System](https://vaadin.com/docs/latest/ds/overview) page shows the actual components; in the top right corner on this page [Web Components 22.0.0-alpha5](https://github.com/vaadin/web-components/tree/v22.0.0-alpha5) opens the [GitHub home of the project](https://github.com/vaadin/web-components).
And this page shows by coincidence a simple but self-contained grid example:
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Vaadin example</title>
    </head>
    <body>
      <!-- Use web components in your HTML like regular built-in elements. -->
      <vaadin-grid theme="row-dividers" column-reordering-allowed multi-sort>
        <vaadin-grid-selection-column auto-select frozen></vaadin-grid-selection-column>
        <vaadin-grid-sort-column width="9em" path="firstName"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column width="9em" path="lastName"></vaadin-grid-sort-column>
        <vaadin-grid-column width="9em" path="address.city"></vaadin-grid-column>
      </vaadin-grid>

      <!-- Vaadin web components use standard JavaScript modules. -->
      <script type="module">
        // Importing the following modules registers <vaadin-grid> and its column
        // elements so that you can use them in this page.
        import '@vaadin/vaadin-grid/vaadin-grid.js';
        import '@vaadin/vaadin-grid/vaadin-grid-selection-column.js';
        import '@vaadin/vaadin-grid/vaadin-grid-sort-column.js';

        // Use component's properties to populate data.
        const grid = document.querySelector('vaadin-grid');
        fetch('https://demo.vaadin.com/demo-data/1.0/people?count=200')
          .then((res) => res.json())
          .then((json) => (grid.items = json.result));
      </script>
    </body>
  </html>
  ```
  along with a link to a live demo [web-padawan vaadin-grid-example](https://webcomponents.dev/edit/JZcKP3kkHcJIgiCaI818/www/index.html) on Webcomponents.dev
  - index.js has only imports
    ```js
    import '@vaadin/vaadin-grid/vaadin-grid.js';
    import '@vaadin/vaadin-grid/vaadin-grid-selection-column.js';
    import '@vaadin/vaadin-grid/vaadin-grid-sort-column.js';
    ```
    
  - Vaadin components are to be imported via multiple [packages](https://github.com/vaadin/web-components/tree/master/packages): 
    `npm install @vaadin/vaadin-grid`
- The [components are written in JavaScript](https://github.com/vaadin/web-components/blob/v22.0.0-alpha5/packages/vaadin-grid/src/vaadin-grid.js) with detailed and consistent JSDoc annotations, along with decent [TypeScript declaration d.ts](https://github.com/vaadin/web-components/blob/v22.0.0-alpha5/packages/vaadin-grid/src/vaadin-grid.d.ts) files.

- Marcus Hellberg 2021 [Vaadin Grid renderers: customize cells and show a details row (Fusion)](https://youtu.be/z24gpqmOZ-w) explains two nifty features, why Vaading Grid is in a different league than the competition. It doesn't mean that UI5 table is not great for most applications, but if you need customizability Vaadin is the way to go.
- Another gem is [Intro to Vaadin Fusion forms: data binding, validation, custom validators - Marcus Hellberg](https://youtu.be/QEgfUsbMvhQ) which seems to be linked to the infrastructure generated by the Java server, but I am pretty sure that this binding machinery can be used standalone, too. This binding is only a syntax suggar with this ellipses syntax on top of the regular form data validation machinery of Vaadin forms.



## Part 1 - Project Setup with Vite and Deployment
- **npm init vite**
- **npm install**
- **npm i lit**
- Copy Counter sample from https://codepen.io/danychi/pen/RwbyQwL
- **npm run dev**
- Initialized Git local repo
- Commit changes: feat(initial): Implement LitElement Counter with ViteJs as Bundler
- Push local repo to make a new repo on GitHub with name paola18
- Create static web deployment with Using Azure Static Web Apps extension 
    - Deployment failed because of TypeScript compilation errors during the build process

## Part 2 Converting to Valid TypeScript
- **npm i -D eslint**
- **npx eslint --init**
    - Add rules:
    ```json
        "@typescript-eslint/no-non-null-assertion":"off",
        "@typescript-eslint/explicit-function-return-type": "error", 
        "@typescript-eslint/explicit-module-boundary-types": ["warn", {"allowArgumentsExplicitlyTypedAsAny":true}], 
        "@typescript-eslint/no-explicit-any":"warn", 
        "quotes": ["error","double",{ "allowTemplateLiterals": true}], 
        "@typescript-eslint/semi": ["error", "never"], 
        "@typescript-eslint/ban-ts-comment": ["warn"]     
    ```  
- Add more rules to **tsconfig.json**
```json
    "noImplicitReturns": true,
    "experimentalDecorators": true, 
    "inlineSourceMap": true, 
    "noImplicitAny": false,    
    "strictNullChecks": true,  
    "strictFunctionTypes": true, 
    "noImplicitThis": true, 
```
- Change these: in tsconfig. Very important!!
```json
    "target": "ES2021",
    //"useDefineForClassFields": true,
```
- Add HTMLElementTagNameMap declaration to the  
`declare global { interface HTMLElementTagNameMap { "my-counter": Counter}}`

## Part 3 Event Handler
In this episode the capability of lit-plugin is demonstrated.
- Add an event dispatcher to the Counter class
    - Start typing @ in the html template and show how nicely lit-plugin immediately recognized that the my-counter component is possibly dispatching an increment custom event.
    - Change the name to "IncrCount" in Counter and see if lit-plugin recognizes the new value.
    - Implement an inline fat-arrow event handler
- Now see if @event or attributes/properties work in html template editing when the component is defined in a separate module
    - Create my-counter.ts and move all the Counter class there
    - Test, if typing @ gives a list of event; it is not expected 
        - Test if attributes/properties are supported by lit-plugin since it detects @property decorators.
    - Show the documentation of lit-plugin where it mentiones JSDoc @fires in the no-unknown-event section

- When there is any chance that an event handler is calling alert(), which would block the UI refresh cycle, before dispatching an event call `await new Promise((r) => setTimeout(r, 0))`
See [Asynchronously adding event listeners](https://lit.dev/docs/components/events/) in Lit documentation, why the need for this 0 timeout await.

### my-counter:
```typescript
import { LitElement, html, TemplateResult} from "lit"
import {customElement,property} from "lit/decorators.js"
// Dispatched events: increment, decrement
export const TCounterEventName = {increment: "increment", decrement: "decrement"} as const
export type TCounterEventPayload = {detail:number}
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
  render():TemplateResult {
    return html`
      <h1>Lit Element - Counter</h1>
      <h2>You clicked ${this.count} times</h2>
      <button type="button" @click=${this.decrement}>Decrement</button>
      <button type="button" @click=${this.increment}>Increment</button>
    `
  }
  /**
   * @event Counter#increment
   */
  increment():void {
    this.setCount(this.count + 1)
    const detail:TCounterEventPayload = {detail:this.count}
    this.dispatchEvent(new CustomEvent(TCounterEventName.increment,detail))
  }
  /**
   * @event Counter#decrement
   */
  decrement():void {
    this.setCount(this.count - 1)
    const detail:TCounterEventPayload = {detail:this.count}
    this.dispatchEvent(new CustomEvent(TCounterEventName.decrement,detail))
  }
}
declare global { interface HTMLElementTagNameMap { "my-counter": Counter}}
```
### main.ts
```typescript
//import "./style.css"
import { html, render } from "lit"
import "./my-counter"
import /* type */ {TCounterEventName, TCounterEventPayload} from "./my-counter"

const app = document.querySelector<HTMLDivElement>("#app")!
export const mc = document.querySelector("my-counter")!

//Counter Event Handlers
function onIncrement({detail}:TCounterEventPayload):void {
  console.log("onIncrement",detail)
}
function onDecrement({detail}:TCounterEventPayload):void {
  console.log("onDecrement",detail)
}
const myConterIncrDecrEventListener = (ev:CustomEvent):void => {
  console.log("Event Listener",ev)
}
/**
 * @listens Counter#decrement
 * @listens Counter#increment
 */
function onCounterEvent(ev:CustomEvent):void {
  console.log("onCounterEvent",ev)
}

render(html`
  <h1>Hello Vite Web Components with TypeScript Decorators like @property!</h1>
  <p>
    <!-- my-counter @decrement=${onDecrement} @increment=${onIncrement} count=5></my-counter -->
    <my-counter @decrement=${async ({detail}):Promise<void> => await alert(`Decremented to ${detail}`)} @increment=${({detail}):void=>alert("inremented to " + detail)} count=5></my-counter>
  </p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`,app)
const myCounter = document.querySelector("my-counter")! 
myCounter.addEventListener(TCounterEventName.increment,myConterIncrDecrEventListener as EventListener)
myCounter.addEventListener(TCounterEventName.decrement,((ev:CustomEvent)=> {
  console.log("Event Listener",ev)
}) as EventListener)

```

## Part 4 SAP UI5 Demo
- I have created d.ts declarations files with a series of commands like:
`"ui5:dialog": "tsc ./node_modules/@ui5/webcomponents/src/Dialog.js --declaration --allowJs --emitDeclarationOnly --outDir ./src/ui5types",` and I added them to the *package.json*
But, then I edited some of them significantly, *BusyIndicator*, for example was the most notable.

- This https://medium.com/codex/how-to-share-constants-in-typescript-project-8f76a2e40352 is a very useful about creating values and string key types.

- https://lit.dev/playground/ is an excellent place tho check out the number of decent examples.
This is a treasury to copy-paste from.

- Here is Petar Skelin's blog post https://blogs.sap.com/2021/05/28/getting-started-with-ui5-web-components-in-2021/ where he recommends Vite and explains why there is no CDN distribution.


- This SAP blogpost https://blogs.sap.com/2020/12/30/using-ui5-web-components-without-any-framework/  with https://github.com/christianp86/ui5-webcomponents-pure-js/tree/main/blog-series/part-1/ui5-webcomponents-wo-frk was the starting point for my ui5products demo page. I converted it to a reactive implementation and I have extended significantly to experiment with the behavior of the Table component.
