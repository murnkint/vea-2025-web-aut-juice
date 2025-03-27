import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/address/select";
  }

  static get addressSelectButton() {
    return cy.get("[role='row']");
  }
  
  static get continueButtonSel() {
    return cy.get("button[aria-label='Proceed to payment selection']");
    
  }
  
}
