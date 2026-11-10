# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Pruebas E2E BDD en español contra el demo público de OrangeHRM (`https://opensource-demo.orangehrmlive.com`, definido como `baseURL` en `playwright.config.ts`). Stack: Playwright + `playwright-bdd` + TypeScript.

## Comandos

- `npm test` — `bddgen && playwright test`. Genera specs desde los `.feature` y ejecuta todo.
- `npm run test:headed` — igual, con navegador visible.
- `npm run report` — abre el reporte HTML (`playwright-report/`).
- Un solo escenario: `npx bddgen && npx playwright test -g "Login exitoso"` (filtra por nombre del escenario).
- Un solo feature: `npx bddgen && npx playwright test .features-gen/src/features/login.feature.spec.js`.

`bddgen` es obligatorio antes de `playwright test` cada vez que cambian `.feature` o steps: Playwright ejecuta los specs generados en `.features-gen/` (ignorado por git), no los `.feature` directamente.

No hay linter ni tests unitarios configurados.

## Arquitectura

Flujo: `.feature` → step definitions → fixture → Page Object → Locators.

- `src/features/*.feature` — escenarios Gherkin en español. Los pasos usan texto en español (`Given que...`, `When inicia sesión...`), así que las expresiones de los steps deben coincidir exactamente.
- `src/steps/fixtures.ts` — extiende `test` de `playwright-bdd` con fixtures de page objects (p. ej. `loginPage`) y exporta `Given/When/Then` vía `createBdd(test)`. Todo step nuevo debe importar de aquí, no de `playwright-bdd`.
- `src/steps/*.steps.ts` — step definitions. Mantenerlos finos: solo delegan al Page Object.
- `src/pages/` — Page Objects con acciones y aserciones (`expect`) de alto nivel. Reciben `Page` y construyen su módulo de locators.
- `src/modules/` — clases que solo declaran `Locator`s de una pantalla (separación locators vs. lógica). Un `XPage.ts` usa un `XModule.ts`.
- `src/resources/data/users.json` — datos de prueba indexados por clave. Los features pasan la clave (`"admin"`, `"invalido"`) y el step resuelve credenciales desde el JSON; no poner credenciales en el `.feature`.

Para añadir una pantalla nueva: `Module` (locators) → `Page` (acciones) → registrar fixture en `fixtures.ts` → steps → `.feature`.

## Notas
- `README.md` Será la documentación del proyecto
