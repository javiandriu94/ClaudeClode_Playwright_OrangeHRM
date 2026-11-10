# Buenas prácticas generales

## Nomenclatura
- Archivos en minúsculas con sufijo por capa: login.page.ts, login.module.ts, login.steps.ts, login.feature, users.json.
- Clases en PascalCase (LoginPage, LoginModule). Métodos y variables en camelCase.
- Locators: sustantivo + tipo de elemento (usernameInput, loginButton, errorMessage).
- Métodos de page: verbo de acción de usuario (login, searchEmployee). Validaciones con prefijo expect (expectDashboardVisible).

## TypeScript
- Prohibido `any`; define tipos o interfaces.
- Sin imports sin usar, código comentado ni console.log olvidados.

## Seguridad
- Nunca escribas credenciales reales ni secretos en código, features o datos.
- Variables sensibles van en .env, que debe estar en .gitignore.

## Flujo de trabajo
- Tras crear o modificar código, ejecuta `npm test` y confirma que pasa.
- Si algo falla, muestra el error y la causa antes de proponer cambios.
- Un cambio lógico por commit.