import { Page, expect } from '@playwright/test';
import { LoginModule } from '../modules/LoginModule';

export class LoginPage {
  private readonly locators: LoginModule;

  constructor(private readonly page: Page) {
    this.locators = new LoginModule(page);
  }

  async open() {
    await this.page.goto('/web/index.php/auth/login');
  }

  async login(username: string, password: string) {
    await this.locators.usernameInput.fill(username);
    await this.locators.passwordInput.fill(password);
    await this.locators.loginButton.click();
  }

  async expectDashboardVisible() {
    await expect(this.locators.dashboardTitle).toBeVisible();
  }

  async expectErrorMessage(message: string) {
    await expect(this.locators.errorMessage).toHaveText(message);
  }
}