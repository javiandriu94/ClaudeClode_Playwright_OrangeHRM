import { Page, expect } from '@playwright/test';
import { LoginModule } from '../modules/login.module';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto('/web/index.php/auth/login');
  }

  async login(username: string, password: string) {
    await LoginModule.usernameInput(this.page).fill(username);
    await LoginModule.passwordInput(this.page).fill(password);
    await LoginModule.loginButton(this.page).click();
  }

  async expectDashboardVisible() {
    await expect(LoginModule.dashboardTitle(this.page)).toBeVisible();
  }

  async expectErrorMessage(message: string) {
    await expect(LoginModule.errorMessage(this.page)).toHaveText(message);
  }

  async expectRequiredMessage() {
    await expect(LoginModule.requiredMessage(this.page)).toBeVisible();
  }
}
