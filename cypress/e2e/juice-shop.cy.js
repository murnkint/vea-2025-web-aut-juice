import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { RegisterPage } from "../pageObjects/RegisterPage";
import { BasketPage } from "../pageObjects/BasketPage.js";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage.js";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage.js";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionPage.js";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage.js";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage.js";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage.js";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage.js";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage.js";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileMenuButton.should("contain.text", "demo");    
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerLink.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      const emailNumber = Math.floor(Math.random() * 101);
      const email = "email_" + emailNumber.toString() + "@ebox.com";
      const password = "randomPassword123#";
      RegisterPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
      RegisterPage.passwordField.type(password);
      RegisterPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegisterPage.securityQuestionField.click();
      // Select  "Name of your favorite pet?"
      RegisterPage.menuOptions.contains("Your favorite book?").click();
      // Fill in answer
      RegisterPage.answerField.type("ABC123");
      // Click Register button
      RegisterPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileMenuButton.should("contain.text", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productBoxContent.should("contain.text", "Sour but full of vitamins.");
    });

    it("Search 500ml and validate Lemon, while having multiple cards", () => {
    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    // Click on search icon
    HomePage.searchIcon.click();
    // Search for 500ml
    HomePage.searchField.type("500ml{enter}");
    // Select a product card - Lemon Juice (500ml)
    HomePage.productBox.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.productBoxContent.should("contain.text", "Sour but full of vitamins.");
    });

    it("Search 500ml and validate cards", () => {
    // Create scenario - Search 500ml and validate cards
    // Click on search icon
    HomePage.searchIcon.click();
    // Search for 500ml
    HomePage.searchField.type("500ml{enter}");
    // Select a product card - Eggfruit Juice (500ml)
    HomePage.productBox.contains("Eggfruit Juice (500ml)").click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.productBoxContent.should("contain.text", "Now with even more exotic flavour.");
    // Close the card
    HomePage.clouseProductBox.click();
    // Select a product card - Lemon Juice (500ml)
    HomePage.productBox.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.productBoxContent.should("contain.text", "Sour but full of vitamins.");
    // Close the card
    HomePage.clouseProductBox.click();
    // Select a product card - Strawberry Juice (500ml)
    HomePage.productBox.contains("Strawberry Juice (500ml)").click();
    // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.productBoxContent.should("contain.text", "Sweet & tasty!");
    });

    it("Create scenario - Read a review", () => {
    // Create scenario - Read a review
    // Click on search icon
    HomePage.searchIcon.click();
    // Search for King
    HomePage.searchField.type("King{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    HomePage.productBox.contains("OWASP Juice Shop \"King of the Hill\" Facemask").click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.expandRequestButton.click();
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    HomePage.reviewText.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });

    it("Create scenario - Add a review", () => {
    // Create scenario - Add a review
    // Click on search icon
    HomePage.searchIcon.click();
    // Search for Raspberry
    HomePage.searchField.type("Raspberry{enter}");
    // Select a product card - Raspberry Juice (1000ml)
    HomePage.productBox.contains("Raspberry Juice (1000ml)").click();
    // Type in review - "Tastes like metal"
    HomePage.typeReview.type("Tastes like metal");
    // Click Submit
    HomePage.submitButton.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.expandRequestButton.click();
    // Validate review -  "Tastes like metal"
    HomePage.reviewText.should("contain.text", "Tastes like metal");
    });

    it("Create scenario - Validate product card amount", () => {
    // Create scenario - Validate product card amount
    // Validate that the default amount of cards is 12
    HomePage.productCards.should("contain.text", 12);

    // Change items per page (at the bottom of page) to 24
    HomePage.itemsPerPageDropdown.click();
    HomePage.itemsPerPageOption.contains("24").click();

    // Validate that the amount of cards is 24
    HomePage.productCards.should("contain.text", 24);

    // Change items per page (at the bottom of page) to 36
    HomePage.itemsPerPageDropdown.first().click();
    HomePage.itemsPerPageOption.contains("36").click();

    // Validate that the amount of cards is 36
    HomePage.productCards.should("contain.text", 36);
    });

    it("Create scenario - Buy Girlie T-shirt", () => {
    // Create scenario - Buy Girlie T-shirt
    // Click on search icon
    HomePage.searchIcon.click();
    // Search for Girlie
    HomePage.searchField.type("Girlie{enter}");
    // Add to basket "Girlie"
    HomePage.addToBasketButton.click();
    // Click on "Your Basket" button
    HomePage.yourBasketButton.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.checkoutButton.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    SelectAddressPage.addressSelectButton.contains("United Fakedom").click();
    // Click Continue button
    SelectAddressPage.continueButtonSel.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    DeliveryMethodPage.selectDeliverySpeedButton.contains("Standard Delivery").click();
    // Click Continue button
    DeliveryMethodPage.continueButtonDel.click();
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    PaymentOptionsPage.selectCard.contains("5678").parents(PaymentOptionsPage.selectCard).find("mat-radio-button").click();
    // Click Continue button
    PaymentOptionsPage.continueButtonPay.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    OrderSummaryPage.placeYourOrderButton.click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    OrderCompletionPage.thankYouForYourPurchase.should("contain.text","Your order will be delivered in 5 days")
      .and ("contain.text", "Delivery Address")
      .and ("contain.text", "Tim Tester")
      .and ("contain.text", "Dummystreet 42, Mocktown, Testilvania, 12345")
      .and ("contain.text", "United Fakedom")
      .and ("contain.text", "Phone Number 4917000000")
      .and ("contain.text", "Girlie") .and ("contain.text", "22.49¤") .and ("contain.text", "1") .and ("contain.text", "22.49¤")
      .and ("contain.text", "22.49¤")
      .and ("contain.text", "0.00¤")
      .and ("contain.text", "0.00¤")
      .and ("contain.text", "22.49¤");
    });

    it("Create scenario - Add address", () => {
    // Create scenario - Add address
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.clickOnOrdersPayment.click();
    // Click on My saved addresses
    HomePage.clickOnMySavedAddresses.click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    SavedAddressesPage.clickOnAddNewAddresses.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    CreateAddressPage.countryField.type("demo");
    CreateAddressPage.nameField.type("demo");
    CreateAddressPage.mobileNumberField.type("12345678");
    CreateAddressPage.zipCodeField.type("demo");
    CreateAddressPage.addressField.type("demo");
    CreateAddressPage.cityField.type("demo");
    CreateAddressPage.stateField.type("demo");
    // Click Submit button
    CreateAddressPage.submitButtonCre.click();
    // Validate that previously added address is visible
    CreateAddressPage.addedAddressIsVisible.should("contain.text","demo, demo, demo, demo") .and ("contain.text", "demo");
    });

    it.only("Create scenario - Add payment option", () => {
    // Create scenario - Add payment option
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.clickOnOrdersPayment.click();
    // Click on My payment options
    HomePage.clickOnMyPaymentOptions.click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    SavedPaymentMethodsPage.clickOnAddNewCard.click();
    // Fill in Name
    const name = "Kimi"
    SavedPaymentMethodsPage.nameFieldSav.type(name);
    // Fill in Card Number
    const cardNumber = "1234567891234567"
    SavedPaymentMethodsPage.cardNumberFieldSav.type(cardNumber);
    // Set expiry month to 7
    SavedPaymentMethodsPage.itemsMonthExpiry.select("7");
    // Set expiry year to 2090
    SavedPaymentMethodsPage.itemsYearExpiry.select("2090");
    // Click Submit button
    SavedPaymentMethodsPage.submitButtonSav.click();
    // Validate that the card shows up in the list
    SavedPaymentMethodsPage.cardShowsUpInTheList.should("contain.text","4567") .and ("contain.text", "Kimi") .and ("contain.text", "7/2090");
    });
  });
});
