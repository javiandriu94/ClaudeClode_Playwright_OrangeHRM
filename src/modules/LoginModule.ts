import { Locator, Page } from '@playwright/test';

export class LoginModule {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly dashboardTitle: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.dashboardTitle = page.getByRole('heading', { name: 'Dashboard' });
    this.errorMessage = page.locator('.oxd-alert-content-text');
  }
}