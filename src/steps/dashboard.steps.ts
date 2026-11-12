import { Then } from './fixtures';

Then('debería ver el widget {string}', async ({ dashboardPage }, title: string) => {
  await dashboardPage.expectWidgetVisible(title);
});

Then('debería ver la opción {string} en el menú lateral', async ({ dashboardPage }, name: string) => {
  await dashboardPage.expectMenuItemVisible(name);
});

Then('debería ver la acción {string} en Quick Launch', async ({ dashboardPage }, name: string) => {
  await dashboardPage.expectQuickLaunchActionVisible(name);
});
