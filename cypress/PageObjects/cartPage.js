import utils from "../helpers/utils.js";

const cart = {
  total: {
    locator: "[data-product-id='340636207'] input.counter-input",
  },
  submit: {
    locator: "[data-cart-submit]",
    text: "Оформить заказ",
  },
  interceptParam: {
    method: "GET",
    url: "/new_order",
  },
};

/**
 *
 * @param {number} - the quantity of the selected item in the cart
 */
export const compareCart = (num) => {
  cy.get(cart.total.locator).should("have.attr", "value", num);
};

export const createIntercept = () => {
  return cy.intercept(cart.interceptParam.method, cart.interceptParam.url);
};

export const clickSubmit = () => {
  utils.clickBtn(cart.submit);
};
