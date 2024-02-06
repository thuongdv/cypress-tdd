import DashboardMainPage from "cypress/support/pages/dashboard-main-page";
import NewPageForm from "cypress/support/pages/new-page-form";
import LoginPage from "cypress/support/pages/login-page";
import { DateTimeHelper } from "cypress/support/helpers/date-time-helper";
import users from "cypress/fixtures/users.json";

const dashboardMainPage = new DashboardMainPage();
const newPageForm = new NewPageForm();
const loginPage = new LoginPage();

it(
  'Verify that user can remove any main parent page except "Overview" page successfully ' +
    "and the order of pages stays persistent as long as there is not children page under it",
  () => {
    const parentPageName = DateTimeHelper.getToday();
    const chillPageName = "Child " + DateTimeHelper.getToday();
    const deletePageMsg = "Are you sure you want to remove this page?";

    // Navigate to Dashboard login page
    loginPage.open();

    // Log in specific repository with valid account
    loginPage.login(users.adminUser.username, users.adminUser.password);

    // Add a new parent page
    dashboardMainPage.selectSetting("Add Page");
    newPageForm.create({ pageName: parentPageName });

    // Add a children page of newly added page
    dashboardMainPage.selectSetting("Add Page");
    newPageForm.create({ pageName: chillPageName, parentPage: parentPageName });

    // Click on parent page
    dashboardMainPage.selectMenu(parentPageName);

    // Click "Delete" link
    // Check confirm message "Are you sure you want to remove this page?" appears
    // Click OK button
    // Check warning message "Can not delete page 'Test' since it has children page(s)" appears
    // Click OK button
    const msg = [deletePageMsg, `Cannot delete page '${parentPageName}' since it has child page(s).`];
    dashboardMainPage.deletePageWhichHasChildAndVerifyDialogMessage(msg);

    // Click on children page
    dashboardMainPage.selectMenu(`${parentPageName}->${chillPageName}`);

    // Click "Delete" link
    // Check confirm message "Are you sure you want to remove this page?" appears
    // Click OK button
    dashboardMainPage.deletePageAndVerifyDialogMessage(deletePageMsg);

    // Check children page is deleted

    // Click on parent page
    dashboardMainPage.selectMenu(parentPageName);

    // Click "Delete" link
    // Check confirm message "Are you sure you want to remove this page?" appears
    // Click OK button
    dashboardMainPage.deletePageAndVerifyDialogMessage(deletePageMsg);

    // Check parent page is deleted
    // Click on "Overview" page
    // Check "Delete" link disappears
  },
);
