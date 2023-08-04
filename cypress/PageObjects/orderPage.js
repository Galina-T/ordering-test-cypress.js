import utils from "../helpers/utils.js";

const order = {
  title: {
    locator: ".decorated-title",
    text: "Оформить заказ",
  },
  formField: {
    surname: "#client_surname",
    name: "#client_contact_name",
    phone: "#client_phone",
    email: "#client_email",
    street: "#shipping_address_street",
    house: "#shipping_address_house",
    petGender: "#checkout_buyer_fields select",
  },
  submit: {
    locator: "#create_order",
    text: "Подтвердить заказ",
  },
  totalPrice: {
    locator: "#total_price",
  },
  reCaptchaError: "#checkout_order_errors",
};

/**
 *
 * @param {string} surname
 */
export const setSurname = (text) => {
  utils.setText(order.formField.surname, text);
};

/**
 *
 * @param {string} name
 */
export const setName = (text) => {
  utils.setText(order.formField.name, text);
};

/**
 *
 * @param {string} phone
 */
export const setPhone = (text) => {
  utils.setText(order.formField.phone, text);
};

/**
 *
 * @param {string} email
 */
export const setEmail = (text) => {
  utils.setText(order.formField.email, text);
};

/**
 *
 * @param {string} street
 */
export const setStreet = (text) => {
  utils.setText(order.formField.street, text);
};

/**
 *
 * @param {string} house
 */
export const setHouse = (text) => {
  utils.setText(order.formField.house, text);
};

/**
 *
 * @param {string} petGender
 */
export const setPetGender = (text) => {
  cy.get(order.formField.petGender).select(text);
};

export const clickSubmit = () => {
  utils.clickBtn(order.submit);
};

export const isReCaptchaError = () => {
  cy.get(order.reCaptchaError)
    .should("be.visible")
    .contains("Не заполнена reCaptcha");
};
