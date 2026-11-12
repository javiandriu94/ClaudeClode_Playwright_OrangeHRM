import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { AdminPage } from '../pages/admin.page';

export const test = base.extend<{
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  adminPage: AdminPage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },
});

export const { Given, When, Then, After } = createBdd(test);
