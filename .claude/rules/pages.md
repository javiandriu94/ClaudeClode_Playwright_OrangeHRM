---
paths:
  - "src/pages/**/*.ts"
---
# Page Objects

- Una clase por página. Recibe `Page` en el constructor como `private readonly`.
- Usa los locators de su clase Module (por ejemplo, `LoginModule.usernameInput(this.page)`). No definas locators aquí.
- Los métodos expresan acciones de usuario, no pasos técnicos.
- Las validaciones van en métodos con prefijo `expect` y usan `expect` de Playwright.
- Una page no llama a otra page ni conoce datos de prueba.