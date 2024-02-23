import { User } from "cypress/support/models/user-model";
import Dialog from "cypress/support/pages/dialogs/dialog";
import LoginPage from "cypress/support/pages/login-page";

import users from "cypress/fixtures/users.json";

const loginPage = new LoginPage();

users.invalidCredentials.forEach((user: User) => {
  it(`Cannot login to system with incorrect credentials: ${user.username}/${user.password}`, () => {
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
