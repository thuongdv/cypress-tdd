import DashboardMainPage from "cypress/support/pages/dashboard-main-page";
import NewPageForm from "cypress/support/pages/new-page-form";
import LoginPage from "cypress/support/pages/login-page";
import { DateTimeHelper } from "cypress/support/helpers/date-time-helper";
import users from "cypress/fixtures/users.json";

const dashboardMainPage = new DashboardMainPage();
const newPageForm = new NewPageForm();
const loginPage = new LoginPage();
const pageName = DateTimeHelper.getToday();

it("Verify that 'Public' pages can be visible and accessed by all users of working repository", () => {
  // Navigate to Dashboard login page
  loginPage.open();

  // Log in specific repository with valid account
  loginPage.login(users.adminUser.username, users.adminUser.password);

  // Go to Global Setting -> Add page
  dashboardMainPage.selectSetting("Add Page");

  // Enter Page Name field
  // Check Public checkbox
  // Click OK button
  newPageForm.create({ pageName: pageName, public: true });

  // Click on Log out link
  // Log in with another valid account
  // Check newly added page is visible
});

afterEach("Delete page", () => {
  dashboardMainPage.selectMenu(pageName);
  dashboardMainPage.deletePage();
});
