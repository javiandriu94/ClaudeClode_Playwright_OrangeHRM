---
paths:
  - "src/steps/**/*.ts"
---
# Step definitions

- Importa Given, When y Then desde `./fixtures`.
- Un step solo delega en un Page Object por medio de fixtures. Sin lógica ni locators.
- Los steps son reutilizables y parametrizados (`{string}`, `{int}`). No dupliques steps con el mismo significado.
- Cada Page Object nuevo se registra como fixture en fixtures.ts.
- Los datos se leen de `src/resources/data`; nunca se escriben en el step.