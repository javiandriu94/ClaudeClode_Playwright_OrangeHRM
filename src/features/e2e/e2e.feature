Feature: Recorrido E2E de OrangeHRM

    @e2e
    Scenario: Recorrido E2E del usuario admin
        Given que el usuario "admin" ha iniciado sesión
        And revisa el widget "Time at Work"
        When accede a la sección Admin
        Then debería ver la gestión de usuarios
        And cierra sesión y vuelve a la página de login
