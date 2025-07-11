/// <reference types="cypress"/>

beforeEach(() => {
  cy.acessarPaginaLogin();
});

describe("Comandos Básicos", () => {
  it.only("Login com sucesso", () => {
    cy.login("diogo@teste.com", "12345678");
    cy.get("#swal2-title").should("contain", "Login realizado");
  });
  it("Login com senha inválida", () => {
    cy.preencherEmail("diogo@teste.com");
    cy.clicarLogin();
    cy.get(".invalid_input").should("contain", "Senha inválida.");
  });
  it("Login com email inválido", () => {
    cy.get("#user").type("diogo");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain", "E-mail inválido.");
  });
  it("Login com campos vazios", () => {
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain", "E-mail inválido.");
  });
  it("Login com email e senha inválidos", () => {
    cy.preencherEmail("diogo@teste.com");
    cy.preencherSenha("12");
    cy.get("#btnLogin").click();
    cy.get("#user").clear();
    cy.get("#user").type("diogo");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain", "E-mail inválido.");
    cy.get(".invalid_input").should("contain", "Senha inválida.");
  });
});
