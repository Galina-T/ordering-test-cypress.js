import utils from "../helpers/utils.js";

const addCart = {
  button: {
    locator: "[data-add-cart-counter-btn]",
    text: "В корзину",
  },
  controls: {
    locator: ".add-cart-counter__controls",
    btnPlus: {
      locator: "[data-add-cart-counter-plus]",
      text: "+",
    },
    linkToCart: {
      locator: ".add-cart-counter__detail",
      text: "Перейти",
    },
    quantity: 0,
  },
  interceptParam: {
    method: "GET",
    url: "/cart_items",
  },
  microAlert: {
    locator: ".micro-alert",
    msgAddCart: "Товар добавлен в корзину",
    msgMaxQuantity:
      "Достигнуто максимальное количество единиц товара для заказа",
  },
};

export const returnQuantity = () => {
  return addCart.controls.quantity;
};

export const clickAddToCart = () => {
  utils.clickBtn(addCart.button);
  addCart.controls.quantity += 1;
};

export const clickAddСounterToCart = () => {
  utils.clickBtn(addCart.controls.btnPlus);
};

export const clickLinkToCart = () => {
  utils.clickLink(addCart.controls.linkToCart);
};

export const createIntercept = () => {
  return cy.intercept(
    addCart.interceptParam.method,
    addCart.interceptParam.url
  );
};

export const expectedClickAddToCart = () => {
  cy.get(addCart.microAlert.locator)
    .scrollIntoView()
    .contains(addCart.microAlert.msgAddCart);
  cy.get(addCart.button.locator).should("not.be.visible");
  cy.get(addCart.controls.locator)
    .should("be.visible")
    .contains(addCart.controls.quantity + " шт");
};

export const expectedClickAddСounterToCart = () => {
  return cy.get(addCart.microAlert.locator).then(($alert) => {
    if ($alert.text().includes(addCart.microAlert.msgMaxQuantity)) {
      return;
    }
    addCart.controls.quantity += 1;
    cy.get(addCart.controls.locator).contains(
      addCart.controls.quantity + " шт"
    );
  });
};
