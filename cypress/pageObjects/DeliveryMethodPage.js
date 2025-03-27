import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/delivery-method";
  }

  static get selectDeliverySpeedButton() {
    return cy.get("[role='row']");
  }
  
  static get continueButtonDel() {
    return cy.get("button[aria-label='Proceed to delivery method selection']");
    
  }
  
}
