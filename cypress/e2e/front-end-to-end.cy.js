import { accounts } from "../fixtures/data/accounts";
import { data } from "../fixtures/data/data";
import { elements } from "../fixtures/elements/elements";

const formData = data.form;
const formElements = elements.form;

describe("TEST END TO END FRONTED", function () {
  // FUNCTION TO ADD AN ITEM TO CART
  function addItemToCart() {
    cy.get(elements.item).first().click();
    cy.get("a").contains(data.addCart).click();
  }

  //FUNCTION TO COMPLETE THE CART
  function completeCart() {
    addItemToCart();
    cy.get(elements.navBar).contains(data.home).click();
    cy.get(elements.lateralList).contains(data.laptops).click();
    cy.wait(750);
    addItemToCart();
  }

  // FUNCTION TO COMPLETE THE PURCHASE FORM
  function completePurchaseForm() {
    cy.get(formElements.name).type(formData.name);
    cy.get(formElements.country).click().type(formData.country);
    cy.get(formElements.city).type(formData.city);
    cy.get(formElements.card).type(formData.card);
    cy.get(formElements.month).type(formData.month);
    cy.get(formElements.year).type(formData.year);
    cy.get(elements.primaryBtn).contains(data.purchase).click();
  }

  // FUNCTION TO LOGIN
  function login() {
    cy.get(elements.login).click();
    cy.wait(500);
    cy.get(elements.loginName).type(accounts.standardUser.name);
    cy.get(elements.loginPassword).type(accounts.standardUser.password);
    cy.get(elements.primaryBtn).contains(data.login).click();
  }

  beforeEach(function () {
    cy.visit("https://www.demoblaze.com");
  });

  it("VISIT THE PAGE DEMOBLAZE CASE 1", function () {
    completeCart();
    cy.get(elements.navBar).contains(data.cart).click();
    cy.get(elements.purchase).contains(data.placeOrder).click();
    completePurchaseForm();
    cy.get("h2").contains(data.confirm).should("be.visible");
  });

  it("VISIT THE PAGE DEMOBLAZE CASE 2", function () {
    login();
    completeCart();
    cy.get(elements.navBar).contains(data.cart).click();
    cy.get(elements.purchase).contains(data.placeOrder).click();
    completePurchaseForm();
    cy.get("h2").contains(data.confirm).should("be.visible");
  });
});
