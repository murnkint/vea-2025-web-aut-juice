import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("#navbarAccount");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }

  static get userProfileMenuButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchIcon() {
    return cy.get("#searchQuery");
  }

  static get searchField() {
    return cy.get("#searchQuery input");
  }

  static get productBox() {
    return cy.get("div.mdc-card");
  }

  static get productBoxContent() {
    return cy.get("[id*='mat-mdc-dialog-']");
  }

  static get clouseProductBox() {
    return cy.get("button[aria-label='Close Dialog']");
  }

  static get expandRequestButton() {
    return cy.get("mat-expansion-panel-header");
  }

  static get reviewText() {
    return cy.get(".review-text");
  }

  static get typeReview() {
    return cy.get("textarea[aria-label='Text field to review a product']");
  }

  static get submitButton() {
    return cy.get("[aria-label='Send the review']");
  }

  static get productCards() {
    return cy.get("[id*='mat-select-value-1']");
  }

  static get itemsPerPageDropdown() {
    return cy.get("[id*='mat-select-0']");
  }

  static get itemsPerPageOption() {
    return cy.get("[id*='mat-select-0-panel']");
  }

  static get addToBasketButton() {
    return cy.get("button[aria-label='Add to Basket']");
  }

  static get yourBasketButton() {
    return cy.get("button[aria-label='Show the shopping cart']");
  }
  
  static get clickOnOrdersPayment() {
    return cy.get("button[aria-label='Show Orders and Payment Menu']");
  }
  
  static get clickOnMySavedAddresses() {
    return cy.get("button[aria-label='Go to saved address page']");
  }
  
  static get clickOnMyPaymentOptions() {
    return cy.get("button[aria-label='Go to saved payment methods page']");
  }
}
