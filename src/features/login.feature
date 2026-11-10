Feature: Inicio de sesión en OrangeHRM

    Background: 
        Given que el usuario abre la página de login

    Scenario: Login exitoso con usuario administrador
        When inicia sesión con las credenciales "admin"
        Then debería ver el dashboard

    Scenario: Login fallido con contraseña incorrecta
        When inicia sesión con las credenciales "invalido"
        Then debería ver el mensaje de error "Invalid credentials"

    Scenario Outline: Login con un campo vacío muestra mensaje de campo requerido
        When inicia sesión con las credenciales "<credenciales>"
        Then debería ver el mensaje de campo requerido

        Examples:
            | credenciales |
            | sin_usuario  |
            | sin_password |
