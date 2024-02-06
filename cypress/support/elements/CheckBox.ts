import BaseElement from "./BaseElement";

export default class CheckBox extends BaseElement {
  uncheck(): void {
    this.chain().uncheck();
  }

  check(): void {
    this.chain().check();
  }
}
