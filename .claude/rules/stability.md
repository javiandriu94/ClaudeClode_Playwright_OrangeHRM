---
paths:
  - "src/pages/**/*.ts"
  - "src/steps/**/*.ts"
---
# Estabilidad de las pruebas

- Prohibido `waitForTimeout` y pausas fijas. Espera una condición: expect, waitFor del locator, waitForURL.
- Usa aserciones web-first: `await expect(locator).toBeVisible()`.
  Prohibido `expect(await locator.isVisible()).toBe(true)`.
- Actúa siempre sobre un Locator (`locator.fill()`, `locator.click()`), no con selectores en string (`page.fill('...')`).
- Prohibido `{ force: true }`: si un clic falla, investiga la causa.
- Sin condicionales (if/try-catch) para esquivar fallos intermitentes.
- Todo método asíncrono lleva `await`.
- El demo de OrangeHRM es público y compartido: los datos que cree un test llevan un sufijo único (por ejemplo, timestamp) y se limpian al terminar.
- Cada escenario es independiente: no depende del orden ni del resultado de otro.