import { NewPageModel } from "cypress/support/models/new-page-model";
import TextBox from "../elements/TextBox";
import CheckBox from "../elements/CheckBox";
import Button from "../elements/Button";
import ComboBox from "../elements/ComboBox";

export default class NewPageForm {
  private readonly pageNameTxt: TextBox = new TextBox("#div_popup #name");
  private readonly parentPageCbx: ComboBox = new ComboBox("#div_popup #parent");
  private readonly okBtn: Button = new Button("#div_popup #OK");
  private readonly publicChk: CheckBox = new CheckBox("#div_popup #ispublic");

  create(data: NewPageModel): void {
    data.pageName && this.pageNameTxt.fill(data.pageName);
    data.parentPage && this.parentPageCbx.selectOption(data.parentPage);
    data.public && (data.public === true ? this.publicChk.check() : this.publicChk.uncheck());

    this.okBtn.click();
  }
}
