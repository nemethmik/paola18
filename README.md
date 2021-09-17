# Lit Tools for Making Web Applications (paola18)

Accompanying videos explaining the whole story:
- [Reactive Web Component Programming Lit Element 01 Counter Project Setup with ViteJS](https://youtu.be/hs0oHgLIFLc)
- [Lit Element Counter Sample Project with ViteJS - 02 GitHub Repo from Local Disk](https://youtu.be/wthWv2Q8Rcg)
- [Lit Element Counter Sample with Vitejs - 03 TypeScriptified so Deployed Successfully](https://youtu.be/aIxCrPzieP4)
- [Lit Element TypeScript Decorators for Counter Sample with Vitejs - 04 Final Deployment on Azure](https://youtu.be/FK4uhP4euuE)

Lit Element Counter Sample App on [Azure](https://lively-field-057f5c603.azurestaticapps.net/)


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
