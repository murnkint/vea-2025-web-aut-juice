import { BasePage } from "../pageObjects/basePage";

export class OrderCompletionPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get thankYouForYourPurchase() {
    return cy.get("[class='mdc-card']");
    
  }
}
