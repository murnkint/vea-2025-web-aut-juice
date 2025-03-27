import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }
  
  static get clickOnAddNewCard() {
    return cy.get("[id='mat-expansion-panel-header-0']");
  }
  
  static get nameFieldSav() {
    return cy.get("[id='mat-input-1']");
  }
  
  static get cardNumberFieldSav() {
    return cy.get("[id='mat-input-2']");
  }

  static get itemsMonthExpiry() {
    return cy.get("[id='mat-input-3']");
  }

  static get itemsYearExpiry() {
    return cy.get("[id='mat-input-4']");
  }

  static get submitButtonSav() {
    return cy.get("#submitButton");
  }

  static get cardShowsUpInTheList() {
    return cy.get("[role='row']");
  }
  
}
