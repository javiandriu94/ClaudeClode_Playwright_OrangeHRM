---
paths:
  - "src/feature/**/*.feature"
---
# Escenarios Gherkin

- Escribe en estilo declarativo (en perspectiva con el usuario), sin detalles técnicos como selectores o URLs o status code.
- Un escenario valida un solo comportamiento.
- Los pasos comunes a todos los escenarios van en `Background`.
- Mismo flujo con distintos datos: usa `Scenario Outline` con `Examples`.
- Etiqueta los escenarios: @smoke para lo crítico, @regression para el resto.
- Nombres de escenario descriptivos que empiezan con el verbo en infinitivo.