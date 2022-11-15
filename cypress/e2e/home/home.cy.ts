describe("Home ", () => {
  it("must have Hello World text", () => {
    cy.visit("/");
    cy.get("p").contains("Hello World");
  });
});
