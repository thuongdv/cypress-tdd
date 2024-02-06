export default class Alert {
  static verifyMessage(msg: string): void {
    cy.on("window:alert", (txt) => {
      expect(txt).to.eq(msg);
    });
  }

  static aaa(msg: string[]): void {
    cy.once("window:alert", (txt) => {
      debugger;
      expect(txt.trim()).to.eq(msg[1].trim());
      return false;
    });

    cy.once("window:alert", (txt) => {
      debugger;
      expect(txt.trim()).to.eq(msg[0].trim());
      return false;
    });
    // let dialogCount = 0;

    // cy.on("window:confirm", () => {
    //   dialogCount++;
    //   // No need to return anything, Cypress does not wait for the callback to resolve
    // });

    // // Trigger the action that opens the dialogs one by one
    // // ...

    // // Wait for all dialogs to appear and be handled
    // cy.wait(() => dialogCount === 2); // Adjust condition as needed

    // // Assert on the content of each dialog based on its expected order
    // cy.window().then((win) => {
    //   expect(win.alert().text).to.equal("Expected text for dialog 1");
    //   win.confirm(); // Manually confirm the second dialog
    //   expect(win.alert().text).to.equal("Expected text for dialog 2");
    // });
  }
}
