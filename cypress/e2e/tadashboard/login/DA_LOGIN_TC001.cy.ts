import LoginPage from "cypress/support/pages/login-page";
import DashboardMainPage from "cypress/support/pages/dashboard-main-page";
import users from "cypress/fixtures/users.json";

const loginPage = new LoginPage();
const dashboardMainPage = new DashboardMainPage();
it("Verify that user can login specific repository successfully via Dashboard login page with correct credentials", () => {
  // Navigate to Dashboard login page
  loginPage.open();

  // Enter valid username and password
  // Click on "Login" button
  loginPage.login(users.adminUser.username, users.adminUser.password);

  // Verify that Dashboard Mainpage appears
  dashboardMainPage.displays();
});
