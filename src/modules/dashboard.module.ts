import { Locator, Page } from '@playwright/test';

export class DashboardModule {
  static readonly userMenuDropdown = (page: Page): Locator =>
    page.getByRole('banner').getByRole('img', { name: 'profile picture' });

  static readonly logoutMenuItem = (page: Page): Locator =>
    page.getByRole('menuitem', { name: 'Logout' });

  static readonly dashboardTitle = (page: Page): Locator =>
    page.getByRole('heading', { name: 'Dashboard' });
}
