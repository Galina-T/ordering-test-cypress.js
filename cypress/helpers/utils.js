const utils = {
  setText(locator, text) {
    cy.get(locator)
      .scrollIntoView()
      .clear()
      .type(text)
      .should("have.value", text);
  },

  clickBtn(btn) {
    cy.get(btn.locator)
      .scrollIntoView()
      .contains(btn.text)
      .should("not.be.disabled")
      .click();
  },

  clickLink(link) {
    cy.get(link.locator).scrollIntoView().contains(link.text).click();
  },
};

export default utils;
