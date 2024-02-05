import LoginPage from "cypress/support/pages/login-page";

const loginPage = new LoginPage();
it("Verify that user can login specific repository successfully via Dashboard login page with correct credentials", () => {
  loginPage.open();
  loginPage.login("administrator", "");
});
