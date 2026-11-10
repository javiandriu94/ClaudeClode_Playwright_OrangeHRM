Feature: Cierre de sesión en OrangeHRM

    Background:
        Given que el usuario "admin" ha iniciado sesión

    @smoke
    Scenario: Mostrar la opción de cerrar sesión en el menú de usuario
        When abre el menú de usuario
        Then debería ver la opción de cerrar sesión

    @smoke
    Scenario: Cerrar sesión desde el menú de usuario
        When cierra sesión desde el menú de usuario
        Then debería ver la página de login

    @regression
    Scenario: Impedir el acceso al dashboard con el botón atrás tras cerrar sesión
        When cierra sesión desde el menú de usuario
        And regresa a la página anterior del navegador
        Then debería ver la página de login
        And no debería ver el dashboard
