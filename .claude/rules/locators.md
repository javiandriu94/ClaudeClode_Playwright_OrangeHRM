---
paths:
  - "src/modules/**/*.ts"
---
# Locators

- Una clase por página con propiedades `static readonly`.
- Cada locator es una función que recibe `Page` y devuelve `Locator`.
- Prioridad: getByRole > getByLabel > getByPlaceholder > getByText > getByTestId > CSS selector.
- Prohibido XPath.
- Si usas CSS selector, deja un comentario que explique por qué no hay opción semántica.
- Evita selectores frágiles: clases autogeneradas, índices (nth) y rutas largas de elementos.
- Un locator no contiene lógica ni acciones.
- Cada locator se guarda en el Module de la página donde se encontró (`login.module.ts` para login, `dashboard.module.ts` para el dashboard).
- No dupliques locators entre Modules: si un elemento ya existe en el Module de su página, reutilízalo desde ahí.
