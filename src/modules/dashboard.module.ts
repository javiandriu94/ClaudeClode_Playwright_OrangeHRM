import { Locator, Page } from '@playwright/test';

export class DashboardModule {
  static readonly userMenuDropdown = (page: Page): Locator =>
    page.getByRole('banner').getByRole('img', { name: 'profile picture' });

  static readonly logoutMenuItem = (page: Page): Locator =>
    page.getByRole('menuitem', { name: 'Logout' });

  static readonly dashboardTitle = (page: Page): Locator =>
    page.getByRole('heading', { name: 'Dashboard' });

  static readonly widgetTitle = (page: Page, title: string): Locator =>
    page.getByText(title, { exact: true });

  static readonly sideMenuLink = (page: Page, name: string): Locator =>
    page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('link', { name, exact: true });

  static readonly quickLaunchButton = (page: Page, name: string): Locator =>
    page.getByRole('button', { name, exact: true });
}
