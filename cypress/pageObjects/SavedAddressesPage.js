import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }
  
  static get clickOnAddNewAddresses() {
    return cy.get("button[aria-label='Add a new address']");
    
  }
}
