Feature: Dashboard de OrangeHRM

    Background:
        Given que el usuario "admin" ha iniciado sesión

    @smoke
    Scenario Outline: Mostrar los widgets principales del dashboard
        Then debería ver el widget "<widget>"

        Examples:
            | widget                             |
            | Time at Work                       |
            | My Actions                         |
            | Quick Launch                       |
            | Buzz Latest Posts                  |
            | Employees on Leave Today           |
            | Employee Distribution by Sub Unit  |
            | Employee Distribution by Location  |

    @regression
    Scenario Outline: Mostrar los módulos en el menú lateral
        Then debería ver la opción "<modulo>" en el menú lateral

        Examples:
            | modulo      |
            | Admin       |
            | PIM         |
            | Leave       |
            | Time        |
            | Recruitment |
            | My Info     |
            | Performance |
            | Dashboard   |
            | Directory   |
            | Maintenance |
            | Claim       |
            | Buzz        |

    @regression
    Scenario Outline: Mostrar las acciones de Quick Launch
        Then debería ver la acción "<accion>" en Quick Launch

        Examples:
            | accion       |
            | Assign Leave |
            | Leave List   |
            | Timesheets   |
            | Apply Leave  |
            | My Leave     |
            | My Timesheet |
