import { Page, expect } from '@playwright/test';
import { DashboardModule } from '../modules/dashboard.module';

export class DashboardPage {
  constructor(private readonly page: Page) {}

  async openUserMenu() {
    await DashboardModule.userMenuDropdown(this.page).click();
  }

  async logout() {
    await this.openUserMenu();
    await DashboardModule.logoutMenuItem(this.page).click();
  }

  async goBack() {
    await this.page.goBack();
  }

  async expectLogoutOptionVisible() {
    await expect(DashboardModule.logoutMenuItem(this.page)).toBeVisible();
  }

  async expectDashboardVisible() {
    await expect(DashboardModule.dashboardTitle(this.page)).toBeVisible();
  }

  async expectDashboardNotVisible() {
    await expect(DashboardModule.dashboardTitle(this.page)).toBeHidden();
  }
}
