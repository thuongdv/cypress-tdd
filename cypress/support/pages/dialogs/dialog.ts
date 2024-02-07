export default class Dialog {
  static verifyConfirmMessage(msg: string): void {
    cy.on("window:confirm", (txt) => {
      expect(txt.trim()).to.eq(msg);
    });
  }

  static verifyConfirmAndAlertMessage(msg: string[]): void {
    cy.once("window:confirm", (txt) => {
      expect(txt.trim()).to.eq(msg[0]);
    });

    cy.once("window:alert", (txt) => {
      expect(txt.trim()).to.eq(msg[1]);
    });
  }
}
