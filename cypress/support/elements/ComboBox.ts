import BaseElement from "./BaseElement";

export default class ComboBox extends BaseElement {
  selectOption(option: string): void {
    this.chain().select(option);
  }
}
