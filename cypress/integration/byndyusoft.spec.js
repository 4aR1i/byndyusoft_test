describe("Verification of contact information on the Byndyusoft website", () => {
  it("Opening google.ru", () => {
    cy.visit("https://www.google.ru/");
    cy.get("input[title='Поиск']").type("Byndyusoft").type("{enter}");
    cy.contains("https://byndyusoft.com").click();
  });

  it("Click on big yellow btn", () => {
    cy.visit("https://byndyusoft.com/");
    cy.wait(3000);
    cy.contains("Узнайте больше о наших продуктах").scrollIntoView();
    cy.get(".know-more__container > .btn").click();
    cy.contains("8 800 775-15-21");
    cy.contains("sales@byndyusoft.com");
  });
});
