describe("test sign up form", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000/pizza");
  });
  it("add test up input and submit", function() {
    //test a name
    cy.get("[data-cy=name]")
      .type("Jojo")
      .should("have.value", "Jojo");
    //test to choose a small size pizza
    cy.get('[data-cy="size"]').select('Small').should("have.value","S");
    //check all checkboxes
    cy.get('[type="checkbox"]').check().should("be.checked");
    //check one checkbox
    cy.get('#cheese').check().should("be.checked");
    //check submit button
    cy.get('[data-cy=submit]').click();
  });
});
