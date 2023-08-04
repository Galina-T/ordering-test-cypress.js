import utils from "../helpers/utils.js";

const product = {
  locator: "[data-product-id='340636207']",
  text: 'Поводок "Пони-Макарони" Винный',
  interceptParam: {
    method: "GET",
    url: "/product/povodok-poni-makaroni-vinnyy",
  },
};

export const clickProduct = () => {
  utils.clickLink(product);
};

export const createIntercept = () => {
  return cy.intercept(
    product.interceptParam.method,
    product.interceptParam.url
  );
};
