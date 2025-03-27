import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/payment/shop";
  }

  static get selectCard() {
    return cy.get("[role='row']");
  }
  
  static get continueButtonPay() {
    return cy.get("button[aria-label='Proceed to review']");
    
  }
}
