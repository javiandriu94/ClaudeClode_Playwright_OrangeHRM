import { Given, When, Then } from './fixtures';
import users from '../resources/data/users.json';

Given('que el usuario {string} ha iniciado sesión', async ({ loginPage, dashboardPage }, key: string) => {
  const user = users[key as keyof typeof users];
  await loginPage.open();
  await loginPage.login(user.username, user.password);
  await dashboardPage.expectDashboardVisible();
});

When('abre el menú de usuario', async ({ dashboardPage }) => {
  await dashboardPage.openUserMenu();
});

When('cierra sesión desde el menú de usuario', async ({ dashboardPage }) => {
  await dashboardPage.logout();
});

When('regresa a la página anterior del navegador', async ({ dashboardPage }) => {
  await dashboardPage.goBack();
});

Then('debería ver la opción de cerrar sesión', async ({ dashboardPage }) => {
  await dashboardPage.expectLogoutOptionVisible();
});

Then('debería ver la página de login', async ({ loginPage }) => {
  await loginPage.expectLoginPageVisible();
});

Then('no debería ver el dashboard', async ({ dashboardPage }) => {
  await dashboardPage.expectDashboardNotVisible();
});
