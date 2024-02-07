import Element from "../elements/Element";
import Link from "../elements/Link";
import Dialog from "./dialogs/dialog";

export default class dashboardMainPage {
  private readonly menuLocator = new Element("#main-menu");
  private readonly settingLocator = new Element("#main-menu .mn-setting");
  private readonly deleteLnk = new Link("#main-menu .mn-setting a.delete");

  displays(): void {
    cy.get("li.active a.active").should("have.text", "Execution Dashboard");
  }

  selectMenu(levelItem: string): void {
    const menuItems: Array<string> = levelItem.split("->").map((s) => s.trim());
    if (menuItems.length > 5) {
      throw new Error("Too many nested pages");
    }

    if (menuItems.length == 1) {
      this.menuLocator.chain().contains(menuItems[0]).click({ force: true });
      return;
    }

    for (let i = 0; i < menuItems.length - 1; i++) {
      this.menuLocator.chain().contains(menuItems[i]).realHover();
    }

    this.menuLocator
      .chain()
      .contains(menuItems[menuItems.length - 1])
      .click({ force: true });
  }

  selectSetting(action: string): void {
    this.settingLocator.hover();
    this.settingLocator.chain().contains(action).click({ force: true });
  }

  deletePage(): void {
    this.settingLocator.hover();
    this.deleteLnk.click();
  }

  deletePageWhichHasChildAndVerifyDialogMessage(msg: string[]) {
    this.deletePage();
    Dialog.verifyConfirmAndAlertMessage(msg);
  }

  deletePageAndVerifyDialogMessage(msg: string) {
    this.deletePage();
    Dialog.verifyConfirmMessage(msg);
  }
}
