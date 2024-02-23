import { User } from "cypress/support/models/user-model";
import Dialog from "cypress/support/pages/dialogs/dialog";
import LoginPage from "cypress/support/pages/login-page";

const loginPage = new LoginPage();

it("Cannot login to system with incorrect credentials", () => {
  cy.fixture("users").then((users) => {
    users.invalidCredentials.forEach((user: User) => {
      // Navigate to Dashboard login page
      loginPage.open();

      // Enter invalid username and password
      // Click on "Login" button
      loginPage.login(user.username, user.password);

      // Verify that Dashboard Error message "Username or password is invalid" appears
      Dialog.verifyConfirmMessage(loginPage.errorMessage);
      loginPage.displays();
    });
  });
});
