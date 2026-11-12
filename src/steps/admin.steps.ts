import { When, Then } from './fixtures';
import users from '../resources/data/users.json';
import adminData from '../resources/data/admin.json';

When('accede a la sección Admin', async ({ adminPage }) => {
  await adminPage.openAdminSection();
});

When('busca por el username {string}', async ({ adminPage }, username: string) => {
  await adminPage.searchByUsername(username);
});

When('busca el usuario de la sesión {string}', async ({ adminPage }, key: string) => {
  const user = users[key as keyof typeof users];
  await adminPage.searchByUsername(user.username);
});

When('busca por el rol {string}', async ({ adminPage }, role: string) => {
  await adminPage.searchByRole(role);
});

When('busca por el estado {string}', async ({ adminPage }, status: string) => {
  await adminPage.searchByStatus(status);
});

When('busca por el rol {string} y el estado {string}', async ({ adminPage }, role: string, status: string) => {
  await adminPage.searchByRoleAndStatus(role, status);
});

When('restablece los filtros', async ({ adminPage }) => {
  await adminPage.resetFilters();
});

When('abre el formulario para agregar un usuario', async ({ adminPage }) => {
  await adminPage.openAddUser();
});

When('guarda el formulario sin completarlo', async ({ adminPage }) => {
  await adminPage.saveUser();
});

When('ingresa el username de prueba {string}', async ({ adminPage }, key: string) => {
  await adminPage.enterNewUsername(adminData[key as keyof typeof adminData]);
});

When('ingresa la contraseña de prueba {string}', async ({ adminPage }, key: string) => {
  await adminPage.enterPassword(adminData[key as keyof typeof adminData]);
});

When('ingresa la confirmación de contraseña de prueba {string}', async ({ adminPage }, key: string) => {
  await adminPage.enterPasswordConfirmation(adminData[key as keyof typeof adminData]);
});

When('navega al submenú {string} de {string}', async ({ adminPage }, option: string, menu: string) => {
  await adminPage.navigateToSubmenu(menu, option);
});

When('navega a la opción {string} del menú superior', async ({ adminPage }, name: string) => {
  await adminPage.navigateToTopbarLink(name);
});

Then('debería ver la gestión de usuarios', async ({ adminPage }) => {
  await adminPage.expectUserManagementVisible();
});

Then('debería ver los filtros de búsqueda y los botones Search y Reset', async ({ adminPage }) => {
  await adminPage.expectSearchFormVisible();
});

Then('debería ver al usuario de la sesión {string} en los resultados', async ({ adminPage }, key: string) => {
  await adminPage.expectUserListed(users[key as keyof typeof users].username);
});

Then('todas las filas deberían tener el valor {string}', async ({ adminPage }, value: string) => {
  await adminPage.expectAllRowsWithValue(value);
});

Then('no debería ver filas de resultados', async ({ adminPage }) => {
  await adminPage.expectNoDataRows();
});

Then('debería ver filas de resultados', async ({ adminPage }) => {
  await adminPage.expectDataRowsVisible();
});

Then('debería ver los filtros vacíos', async ({ adminPage }) => {
  await adminPage.expectFiltersCleared();
});

Then('debería ver la columna {string}', async ({ adminPage }, name: string) => {
  await adminPage.expectColumnVisible(name);
});

Then('debería ver el contador {string}', async ({ adminPage }, text: string) => {
  await adminPage.expectRecordsFoundText(text);
});

Then('debería ver el formulario de nuevo usuario con todos sus campos', async ({ adminPage }) => {
  await adminPage.expectAddUserFormVisible();
});

Then('debería ver el mensaje {string} en el campo {string}', async ({ adminPage }, message: string, label: string) => {
  await adminPage.expectFieldError(label, message);
});

Then('debería permanecer en el formulario de nuevo usuario', async ({ adminPage }) => {
  await adminPage.expectAddUserFormVisible();
});

Then('debería ver la página de {string}', async ({ adminPage }, option: string) => {
  await adminPage.expectSubmenuDestination(option);
});
