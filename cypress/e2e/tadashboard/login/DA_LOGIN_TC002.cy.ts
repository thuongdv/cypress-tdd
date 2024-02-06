import Alert from "cypress/support/pages/dialogs/alert";
import LoginPage from "cypress/support/pages/login-page";

const loginPage = new LoginPage();
it("Verify that user fails to login specific repository successfully via Dashboard login page with incorrect credentials", () => {
  const loginMessage = "Username or password is invalid";

  // Navigate to Dashboard login page
  loginPage.open();

  // Enter invalid username and password
  // Click on "Login" button
  loginPage.login("incorrect", "credential");

  // Verify that Dashboard Error message "Username or password is invalid" appears
  Alert.verifyMessage(loginMessage);
  loginPage.displays();
});
