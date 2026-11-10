Feature: Inicio de sesión en OrangeHRM

    Background: 
        Given que el usuario abre la página de login

    Scenario: Login exitoso con usuario administrador
        When inicia sesión con las credenciales "admin"
        Then debería ver el dashboard

    Scenario: Login fallido con contraseña incorrecta
        When inicia sesión con las credenciales "invalido"
        Then debería ver el mensaje de error "Invalid credentials"