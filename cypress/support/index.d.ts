/// <reference types="cypress" />
/// <reference types="@cypress/grep" />

// tslint:disable-next-line:no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Wait for element without failing test
     * @example
     * cy.waitUntil()
     */
    waitUntil(fn, options): Chainable<Subject>;

    /**
     * Get one or more DOM elements by selector, xpath or alias
     * @example
     * cy.cget('xpath or others')
     */
    cget(selector: string, options?: Partial<Loggable & Timeoutable & Withinable & Shadow>): Chainable<Subject>;

    /**
     * Visit to different url from current visit
     */
    forceVisit(url: string): Chainable<Subject>;

    crequest(options): Chainable<Subject>;

    cqueue(): Chainable<Subject>;

    printLog(message): void;
  }
}
