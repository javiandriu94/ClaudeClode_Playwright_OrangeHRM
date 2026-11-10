import { Given, When, Then } from './fixtures';
import users from '../resources/data/users.json';

Given('que el usuario abre la página de login', async ({ loginPage }) => {
  await loginPage.open();
});

When('inicia sesión con las credenciales {string}', async ({ loginPage }, key: string) => {
  const user = users[key as keyof typeof users];
  await loginPage.login(user.username, user.password);
});

Then('debería ver el dashboard', async ({ loginPage }) => {
  await loginPage.expectDashboardVisible();
});

Then('debería ver el mensaje de error {string}', async ({ loginPage }, message: string) => {
  await loginPage.expectErrorMessage(message);
});

Then('debería ver el mensaje de campo requerido', async ({ loginPage }) => {
  await loginPage.expectRequiredMessage();
});
