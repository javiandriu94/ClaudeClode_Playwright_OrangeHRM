import { Locator, Page } from '@playwright/test';

export class AdminModule {
  // Las etiquetas del formulario no están asociadas a sus campos (getByLabel devuelve 0),
  // por eso se acota por el contenedor .oxd-input-group que contiene el texto de la etiqueta.
  static readonly filterGroup = (page: Page, label: string): Locator =>
    page.locator('.oxd-input-group').filter({ has: page.getByText(label, { exact: true }) });

  static readonly userManagementTitle = (page: Page): Locator =>
    page.getByRole('heading', { name: '/ User Management' });

  static readonly systemUsersTitle = (page: Page): Locator =>
    page.getByRole('heading', { name: 'System Users' });

  static readonly topbarMenu = (page: Page): Locator =>
    page.getByRole('navigation', { name: 'Topbar Menu' });

  static readonly topbarTab = (page: Page, name: string): Locator =>
    AdminModule.topbarMenu(page).getByRole('listitem').filter({ hasText: name });

  static readonly submenuOption = (page: Page, name: string): Locator =>
    AdminModule.topbarMenu(page).getByRole('menuitem', { name });

  // Nationalities y Corporate Branding son enlaces directos del topbar (sin desplegable) en anchos amplios.
  static readonly topbarLink = (page: Page, name: string): Locator =>
    AdminModule.topbarMenu(page).getByRole('link', { name, exact: true });

  static readonly usernameInput = (page: Page): Locator =>
    AdminModule.filterGroup(page, 'Username').getByRole('textbox');

  static readonly userRoleSelect = (page: Page): Locator =>
    AdminModule.filterGroup(page, 'User Role').getByText('-- Select --');

  static readonly statusSelect = (page: Page): Locator =>
    AdminModule.filterGroup(page, 'Status').getByText('-- Select --');

  static readonly employeeNameInput = (page: Page): Locator =>
    AdminModule.filterGroup(page, 'Employee Name').getByRole('textbox');

  static readonly selectOption = (page: Page, name: string): Locator =>
    page.getByRole('option', { name });

  static readonly searchButton = (page: Page): Locator =>
    page.getByRole('button', { name: 'Search', exact: true });

  static readonly resetButton = (page: Page): Locator =>
    page.getByRole('button', { name: 'Reset' });

  static readonly addButton = (page: Page): Locator =>
    page.getByRole('button', { name: 'Add' });

  static readonly recordsFoundText = (page: Page): Locator =>
    page.getByText(/\(\d+\) Records? Found/);

  static readonly recordsFoundTextExact = (page: Page, text: string): Locator =>
    page.getByText(text, { exact: true });

  static readonly usersTable = (page: Page): Locator =>
    page.getByRole('table');

  // El nombre accesible de la cabecera lleva un sufijo del icono de orden, por eso se usa regex por prefijo.
  static readonly columnHeader = (page: Page, name: string): Locator =>
    AdminModule.usersTable(page).getByRole('columnheader', { name: new RegExp(`^${name}`) });

  // Las filas de datos son las que tienen celdas; la cabecera solo tiene columnheader.
  static readonly dataRows = (page: Page): Locator =>
    AdminModule.usersTable(page).getByRole('row').filter({ has: page.getByRole('cell') });

  static readonly dataRowsWithoutCell = (page: Page, cellText: string): Locator =>
    AdminModule.dataRows(page).filter({
      hasNot: page.getByRole('cell', { name: cellText, exact: true }),
    });

  static readonly userRow = (page: Page, username: string): Locator =>
    AdminModule.dataRows(page).filter({
      has: page.getByRole('cell', { name: username, exact: true }),
    });

  static readonly addUserTitle = (page: Page): Locator =>
    page.getByRole('heading', { name: 'Add User' });

  // Sin rol ni label accesible: el input de contraseña no expone nombre, se acota por grupo + tipo.
  static readonly passwordInput = (page: Page): Locator =>
    AdminModule.filterGroup(page, 'Password').locator('input[type=password]');

  static readonly confirmPasswordInput = (page: Page): Locator =>
    AdminModule.filterGroup(page, 'Confirm Password').locator('input[type=password]');

  static readonly saveButton = (page: Page): Locator =>
    page.getByRole('button', { name: 'Save' });

  static readonly cancelButton = (page: Page): Locator =>
    page.getByRole('button', { name: 'Cancel' });

  static readonly fieldError = (page: Page, label: string, message: string): Locator =>
    AdminModule.filterGroup(page, label).getByText(message, { exact: true });
}
