// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("acessarPaginaCadastro", () => {
  cy.visit("/register");
});

Cypress.Commands.add("preencherNomeCadastro", (name) => {
  cy.get("#user").type(name);
});

Cypress.Commands.add("preencherEmailCadastro", (email) => {
  cy.get("#email").type(email);
});

Cypress.Commands.add("preencherSenhaCadastro", (password) => {
  cy.get("#password").type(password);
});

Cypress.Commands.add("salvarCadastro", () => {
  cy.get("#btnRegister").click();
});

Cypress.Commands.add("validarCadastroUsuario", (name) => {
  cy.get("#swal2-title").should("contain", "Cadastro realizado!");
  cy.get("#swal2-html-container").should("contain", `Bem-vindo ${name}`);
});

// Dúvida -> Quais dessas 3 formas é a mais recomendada?
Cypress.Commands.add("validarErroNomeVazio", () => {
  cy.get("#errorMessageFirstName").should(
    "contain",
    "O campo nome deve ser prenchido"
  );
});

Cypress.Commands.add("validarErroNome", (message) => {
  cy.get("#errorMessageFirstName").should("contain", message);
});

// Optei por utilizar esse, como o locator é igual, passei direto aqui.
// mas poderia passar uma variável 'locator'
Cypress.Commands.add("validarErro", (message) => {
  cy.get("#errorMessageFirstName").should("contain", message);
});
