import Button from "cypress/support/elements/Button";
import TextBox from "cypress/support/elements/TextBox";

export default class LoginPage {
  private readonly usernameTxt: TextBox = new TextBox("#username");
  private readonly passwordTxt: TextBox = new TextBox("#password");
  private readonly loginBtn: Button = new Button(".btn-login");

  public readonly errorMessage: string = "Username or password is invalid";

  open(): void {
    cy.visit("/TADashboard/login.jsp");
  }

  login(username: string, password: string): void {
    this.usernameTxt.fill(username);
    this.passwordTxt.fill(password);
    this.loginBtn.click();
  }

  displays(): void {
    this.usernameTxt.chain().should("be.visible");
    this.passwordTxt.chain().should("be.visible");
  }
}
