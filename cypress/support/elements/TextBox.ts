/// <reference types="cypress" />

import BaseElement from "./BaseElement";
import Chainable = Cypress.Chainable;

export default class TextBox extends BaseElement {
  public fill(text: string): Chainable {
    if (!text) return;
    return this.scrollIntoView().clear({ force: true }).type(text, { force: true });
  }

  public fillWithDelay(text: string, delayInMs: number): Chainable {
    return this.scrollIntoView().clear({ force: true }).type(text, { force: true, delay: delayInMs });
  }
}
