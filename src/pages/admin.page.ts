import { Page, expect } from '@playwright/test';
import { AdminModule } from '../modules/admin.module';
import { DashboardModule } from '../modules/dashboard.module';

const submenuUrls: Record<string, RegExp> = {
  'Job Titles': /\/admin\/viewJobTitleList/,
  Nationalities: /\/admin\/nationality/,
  'Corporate Branding': /\/admin\/addTheme/,
};

export class AdminPage {
  constructor(private readonly page: Page) {}

  async openAdminSection() {
    await DashboardModule.sideMenuLink(this.page, 'Admin').click();
  }

  async openTopbarMenu(name: string) {
    await AdminModule.topbarTab(this.page, name).click();
  }

  async navigateToTopbarLink(name: string) {
    await AdminModule.topbarLink(this.page, name).click();
  }

  async navigateToSubmenu(menu: string, option: string) {
    await this.openTopbarMenu(menu);
    await AdminModule.submenuOption(this.page, option).click();
  }

  async searchByUsername(username: string) {
    await AdminModule.usernameInput(this.page).fill(username);
    await AdminModule.searchButton(this.page).click();
  }

  async searchByRole(role: string) {
    await this.selectRole(role);
    await AdminModule.searchButton(this.page).click();
  }

  async searchByStatus(status: string) {
    await this.selectStatus(status);
    await AdminModule.searchButton(this.page).click();
  }

  async searchByRoleAndStatus(role: string, status: string) {
    await this.selectRole(role);
    await this.selectStatus(status);
    await AdminModule.searchButton(this.page).click();
  }

  async resetFilters() {
    await AdminModule.resetButton(this.page).click();
  }

  async openAddUser() {
    await AdminModule.addButton(this.page).click();
  }

  async saveUser() {
    await AdminModule.saveButton(this.page).click();
  }

  async enterNewUsername(username: string) {
    await AdminModule.usernameInput(this.page).fill(username);
  }

  async enterPassword(password: string) {
    await AdminModule.passwordInput(this.page).fill(password);
  }

  async enterPasswordConfirmation(password: string) {
    await AdminModule.confirmPasswordInput(this.page).fill(password);
  }

  async expectUserManagementVisible() {
    await expect(AdminModule.userManagementTitle(this.page)).toBeVisible();
    await expect(AdminModule.systemUsersTitle(this.page)).toBeVisible();
  }

  async expectSearchFormVisible() {
    await expect(AdminModule.usernameInput(this.page)).toBeVisible();
    await expect(AdminModule.userRoleSelect(this.page)).toBeVisible();
    await expect(AdminModule.employeeNameInput(this.page)).toBeVisible();
    await expect(AdminModule.statusSelect(this.page)).toBeVisible();
    await expect(AdminModule.searchButton(this.page)).toBeVisible();
    await expect(AdminModule.resetButton(this.page)).toBeVisible();
  }

  async expectColumnVisible(name: string) {
    await expect(AdminModule.columnHeader(this.page, name)).toBeVisible();
  }

  async expectUserListed(username: string) {
    await expect(AdminModule.userRow(this.page, username).first()).toBeVisible();
  }

  async expectNoDataRows() {
    await expect(AdminModule.dataRows(this.page)).toHaveCount(0);
  }

  async expectDataRowsVisible() {
    await expect(AdminModule.dataRows(this.page).first()).toBeVisible();
  }

  async expectAllRowsWithValue(value: string) {
    await expect(AdminModule.dataRowsWithoutCell(this.page, value)).toHaveCount(0);
    await expect(AdminModule.dataRows(this.page).first()).toBeVisible();
  }

  async expectRecordsFoundText(text: string) {
    await expect(AdminModule.recordsFoundTextExact(this.page, text)).toBeVisible();
  }

  async expectFiltersCleared() {
    await expect(AdminModule.userRoleSelect(this.page)).toBeVisible();
    await expect(AdminModule.statusSelect(this.page)).toBeVisible();
    await expect(AdminModule.usernameInput(this.page)).toHaveValue('');
  }

  async expectAddUserFormVisible() {
    await expect(AdminModule.addUserTitle(this.page)).toBeVisible();
    await expect(AdminModule.userRoleSelect(this.page)).toBeVisible();
    await expect(AdminModule.employeeNameInput(this.page)).toBeVisible();
    await expect(AdminModule.statusSelect(this.page)).toBeVisible();
    await expect(AdminModule.usernameInput(this.page)).toBeVisible();
    await expect(AdminModule.passwordInput(this.page)).toBeVisible();
    await expect(AdminModule.confirmPasswordInput(this.page)).toBeVisible();
    await expect(AdminModule.saveButton(this.page)).toBeVisible();
    await expect(AdminModule.cancelButton(this.page)).toBeVisible();
  }

  async expectFieldError(label: string, message: string) {
    await expect(AdminModule.fieldError(this.page, label, message)).toBeVisible();
  }

  async expectSubmenuDestination(option: string) {
    await expect(this.page).toHaveURL(submenuUrls[option]);
  }

  private async selectRole(role: string) {
    await AdminModule.userRoleSelect(this.page).click();
    await AdminModule.selectOption(this.page, role).click();
  }

  private async selectStatus(status: string) {
    await AdminModule.statusSelect(this.page).click();
    await AdminModule.selectOption(this.page, status).click();
  }
}
