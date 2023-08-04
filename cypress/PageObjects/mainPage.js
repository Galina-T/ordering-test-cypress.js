import utils from "../helpers/utils.js";

const banner = {
  locator: "[data-block-id='22531463']",
  text: "Амуниция",
  interceptParam: {
    method: "GET",
    url: "collection/povodki",
  },
};

export const clickBanner = () => {
  utils.clickLink(banner);
};

export const createIntercept = () => {
  return cy.intercept(banner.interceptParam.method, banner.interceptParam.url);
};
