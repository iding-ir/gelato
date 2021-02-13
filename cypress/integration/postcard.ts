describe(`As a user I want to view my postcards`, () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it(`Scenario: see my postcard`, () => {
    cy.get(`[data-component-name="full-postcard-1"]`)
      .should("exist")
      .should("be.visible");
  });

  it(`Scenario: see thumbnails`, () => {
    cy.get(`[data-component-name="thumb-postcard-1"]`)
      .should("exist")
      .should("be.visible");
    cy.get(`[data-component-name="thumb-postcard-2"]`)
      .should("exist")
      .should("be.visible");
  });

  it(`Scenario: switch between postcards`, () => {
    cy.get(`[data-component-name="thumb-postcard-2"]`).click();
    cy.get(`[data-component-name="full-postcard-2"]`)
      .should("exist")
      .should("be.visible");
  });
});

export {};
