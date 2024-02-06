export default class Alert {
  static verifyMessage(msg: string): void {
    cy.on("window:alert", (txt) => {
      expect(txt).to.eq(msg);
    });
  }
}
