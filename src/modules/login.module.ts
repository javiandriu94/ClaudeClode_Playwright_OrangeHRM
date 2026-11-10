import { Locator, Page } from '@playwright/test';

export class LoginModule {
  static readonly usernameInput = (page: Page): Locator =>
    page.getByRole('textbox', { name: 'Username' });

  static readonly passwordInput = (page: Page): Locator =>
    page.getByRole('textbox', { name: 'Password' });

  static readonly loginButton = (page: Page): Locator =>
    page.getByRole('button', { name: 'Login' });

  static readonly dashboardTitle = (page: Page): Locator =>
    page.getByRole('heading', { name: 'Dashboard' });

  static readonly errorMessage = (page: Page): Locator =>
    page.getByRole('alert');

  static readonly requiredMessage = (page: Page): Locator =>
    page.getByText('Required', { exact: true });
}
