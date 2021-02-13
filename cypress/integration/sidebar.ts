describe(`As a user I want to modify my postcard`, () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it(`Scenario: add text block`, () => {
    cy.get(`[data-component-name="nextBlock"]`).click();
    cy.get(`[data-component-name="overlay"]`)
      .should("exist")
      .should("be.visible");
    cy.get(`[data-component-name="overlay"]`)
      .click("left")
      .should("not.be.visible");
  });
});

export {};
