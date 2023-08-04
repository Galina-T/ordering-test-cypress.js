import * as mainPage from "../PageObjects/mainPage.js";
import * as collectionPage from "../PageObjects/collectionPage.js";
import * as productPage from "../PageObjects/productPage.js";
import * as cartPage from "../PageObjects/cartPage.js";
import * as orderPage from "../PageObjects/orderPage.js";

describe("placing an order on the site huntingPony", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Adds an order to the cart and checkout", function () {
    mainPage.createIntercept().as("pageCollection");
    collectionPage.createIntercept().as("pageProduct");
    productPage.createIntercept().as("pageCart");
    cartPage.createIntercept().as("pageOrder");

    mainPage.clickBanner();
    cy.wait("@pageCollection");

    collectionPage.clickProduct();
    cy.wait("@pageProduct");

    cy.wait(2000); // т.к скрипт долго грузится и эвенты не успевают навеситься (не нашла иной способ обойти)

    productPage.clickAddToCart();
    productPage.expectedClickAddToCart();

    productPage.clickAddСounterToCart();
    productPage.expectedClickAddСounterToCart().then(() => {
      productPage.clickLinkToCart();
      cy.wait("@pageCart");

      cartPage.compareCart(productPage.returnQuantity());
      cartPage.clickSubmit();
      cy.wait("@pageOrder");

      cy.fixture("client").then((data) => {
        orderPage.setSurname(data.surname);
        orderPage.setName(data.name);
        orderPage.setPhone(data.phone);
        orderPage.setEmail(data.email);
        orderPage.setStreet(data.street);
        orderPage.setHouse(data.house);
        orderPage.setPetGender(data.petGender);
      });

      orderPage.clickSubmit();
      orderPage.isReCaptchaError();
    });
  });
});
