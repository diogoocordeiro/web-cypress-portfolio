/// <reference types="cypress"/>

describe("Comandos Básicos", () => {
  it("Acessar uma URL", () => {
    cy.visit("https://automationpratice.com.br/login");
  });

  it("Encontrar elemento", () => {
    cy.visit("https://automationpratice.com.br/login");

    cy.get("#user");

    cy.get("#mc_embed_signup").find(".form-control");
  });

  it("Preencher campo", () => {
    cy.visit("https://automationpratice.com.br/login");
    cy.get("#mc_embed_signup")
      .find(".form-control")
      .type("diogo.teste@gmail.com");
  });

  it("Clicar no botão", () => {
    cy.visit("https://automationpratice.com.br/login");
    cy.get("#btnLogin").click();
    //cy.get("#btnLogin").dblclick(); -> Duplo clique
    //cy.get("#btnLogin").rightclick(); -> Clique com botão direito
  });

  it.only("Clicar no botão", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");
    //cy.get("#country").select("USA");
    cy.get("#country").select(1);
  });
});
