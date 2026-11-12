Feature: Gestión de usuarios en Admin de OrangeHRM

    Background:
        Given que el usuario "admin" ha iniciado sesión
        When accede a la sección Admin

    @happy @smoke
    Scenario: Mostrar User Management al entrar en Admin
        Then debería ver la gestión de usuarios

    @happy
    Scenario: Mostrar los filtros de búsqueda y los botones Search y Reset
        Then debería ver los filtros de búsqueda y los botones Search y Reset

    @happy @smoke
    Scenario: Buscar un usuario existente por su username
        When busca el usuario de la sesión "admin"
        Then debería ver al usuario de la sesión "admin" en los resultados

    @happy
    Scenario Outline: Filtrar usuarios por rol
        When busca por el rol "<rol>"
        Then todas las filas deberían tener el valor "<rol>"

        Examples:
            | rol   |
            | Admin |
            | ESS   |

    @happy
    Scenario Outline: Filtrar usuarios por estado
        When busca por el estado "<estado>"
        Then todas las filas deberían tener el valor "<estado>"

        Examples:
            | estado   |
            | Enabled  |
            | Disabled |

    @happy
    Scenario: Restablecer los filtros tras una búsqueda
        When busca por el rol "Admin"
        And restablece los filtros
        Then debería ver los filtros vacíos

    @happy
    Scenario Outline: Mostrar las columnas de la tabla de usuarios
        Then debería ver la columna "<columna>"

        Examples:
            | columna       |
            | Username      |
            | User Role     |
            | Employee Name |
            | Status        |
            | Actions       |

    @happy
    Scenario: Abrir el formulario de nuevo usuario con sus campos
        When abre el formulario para agregar un usuario
        Then debería ver el formulario de nuevo usuario con todos sus campos

    @happy
    Scenario: Navegar al submenú Job Titles desde la barra superior
        When navega al submenú "Job Titles" de "Job"
        Then debería ver la página de "Job Titles"

    @happy
    Scenario Outline: Navegar a las opciones directas de la barra superior
        When navega a la opción "<opcion>" del menú superior
        Then debería ver la página de "<opcion>"

        Examples:
            | opcion             |
            | Nationalities      |
            | Corporate Branding |

    @sad
    Scenario: Buscar un username inexistente no devuelve resultados
        When busca por el username "usuario-inexistente-zz9"
        Then no debería ver filas de resultados

    @sad
    Scenario Outline: Guardar el formulario de nuevo usuario vacío muestra campos requeridos
        When abre el formulario para agregar un usuario
        And guarda el formulario sin completarlo
        Then debería ver el mensaje "Required" en el campo "<campo>"
        And debería permanecer en el formulario de nuevo usuario

        Examples:
            | campo         |
            | User Role     |
            | Employee Name |
            | Status        |
            | Username      |
            | Password      |

    @sad
    Scenario: Rechazar una confirmación de contraseña distinta
        When abre el formulario para agregar un usuario
        And ingresa la contraseña de prueba "passwordValida"
        And ingresa la confirmación de contraseña de prueba "passwordDistinta"
        Then debería ver el mensaje "Passwords do not match" en el campo "Confirm Password"

    @sad
    Scenario: Rechazar un username demasiado corto
        When abre el formulario para agregar un usuario
        And ingresa el username de prueba "usernameCorto"
        Then debería ver el mensaje "Should be at least 5 characters" en el campo "Username"

    @sad
    Scenario: Rechazar una contraseña demasiado corta
        When abre el formulario para agregar un usuario
        And ingresa la contraseña de prueba "passwordCorta"
        Then debería ver el mensaje "Should have at least 7 characters" en el campo "Password"

    # Depende de los datos del demo: se asume que no hay usuarios Admin deshabilitados.
    @edge
    Scenario: Combinar rol Admin con estado Disabled no devuelve resultados
        When busca por el rol "Admin" y el estado "Disabled"
        Then no debería ver filas de resultados

    @edge
    Scenario: Mostrar el contador en singular cuando hay un único resultado
        When busca el usuario de la sesión "admin"
        Then debería ver el contador "(1) Record Found"

    @edge
    Scenario: Restablecer los filtros tras una búsqueda sin resultados restaura el listado
        When busca por el username "usuario-inexistente-zz9"
        And restablece los filtros
        Then debería ver filas de resultados
