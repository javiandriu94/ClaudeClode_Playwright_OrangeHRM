import { When, After } from './fixtures';

When('revisa el widget {string}', async ({ dashboardPage }, title: string) => {
  await dashboardPage.expectWidgetVisible(title);
});

When('cierra sesión y vuelve a la página de login', async ({ dashboardPage, loginPage }) => {
  await dashboardPage.logout();
  await loginPage.expectLoginPageVisible();
});

After({ tags: '@e2e' }, async ({ dashboardPage }) => {
  await dashboardPage.logoutIfSessionActive();
});
