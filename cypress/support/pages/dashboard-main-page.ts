export default class dashboardMainPage {
    displays(): void {
        cy.get("li.active a.active").should("have.text", "Execution Dashboard");
    }
}