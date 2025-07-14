/// <reference types="cypress"/>

const loginPage = require("../support/pages/login-page");

beforeEach(() => {
  loginPage.acessarLogin();
});

describe("Comandos Básicos", () => {
  it("Login com sucesso", () => {
    loginPage.login("diogo@teste.com", "12345678");
    cy.get("#swal2-title").should("contain", "Login realizado");
  });
  it("Login com senha inválida", () => {
    loginPage.preencherEmail("diogo@teste.com");
    loginPage.clicarLogin();
    cy.get(".invalid_input").should("contain", "Senha inválida.");
  });
  it("Login com email inválido", () => {
    loginPage.preencherEmail("diogo");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain", "E-mail inválido.");
  });
  it("Login com campos vazios", () => {
    loginPage.clicarLogin();
    cy.get(".invalid_input").should("contain", "E-mail inválido.");
  });
  it("Login com email e senha inválidos", () => {
    loginPage.preencherEmail("diogo@teste.com");
    loginPage.preencherSenha("12");
    loginPage.clicarLogin();
    cy.get("#user").clear();
    loginPage.preencherEmail("diogo");
    loginPage.clicarLogin();
    cy.get(".invalid_input").should("contain", "E-mail inválido.");
    cy.get(".invalid_input").should("contain", "Senha inválida.");
  });
});
