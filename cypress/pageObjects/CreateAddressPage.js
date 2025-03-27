import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }
  
  static get countryField() {
    return cy.get("[id*='mat-input-1']");
  }

  static get nameField() {
    return cy.get("[id*='mat-input-2']");
  }

  static get mobileNumberField() {
    return cy.get("[id*='mat-input-3']");
  }

  static get zipCodeField() {
    return cy.get("[id*='mat-input-4']");
  }

  static get addressField() {
    return cy.get("[id='address']");
  }

  static get cityField() {
    return cy.get("[id*='mat-input-6']");
  }

  static get stateField() {
    return cy.get("[id*='mat-input-7']");
  }

  static get submitButtonCre() {
    return cy.get("#submitButton");
  }
  
  static get addedAddressIsVisible() {
    return cy.get("[role='row']");
  }
  
}
