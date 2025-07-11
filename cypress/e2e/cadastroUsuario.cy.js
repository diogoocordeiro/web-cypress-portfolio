/// <reference types="cypress"/>

import { faker } from "@faker-js/faker";

describe("Cadastro de usuário", () => {
  let name, email, password;

  beforeEach(() => {
    name = faker.person.fullName();
    email = faker.internet.email({ firstName: name, provider: "teste.com" });
    password = faker.internet.password({ length: 8 });

    cy.visit("/register");
  });

  it("Cadastro com sucesso", () => {
    cy.preencherNomeCadastro(name);
    cy.preencherEmailCadastro(email);
    cy.preencherSenhaCadastro(password);
    cy.salvarCadastro();
    cy.validarCadastroUsuario(name);
  });
  it("Cadastro com nome vazio", () => {
    cy.preencherEmailCadastro(email);
    cy.preencherSenhaCadastro(password);
    cy.salvarCadastro();
    cy.validarErro("O campo nome deve ser prenchido");

    //cy.validarErro("#errorMessageFirstName", "O campo nome deve ser prenchido");
    //cy.validarErroNome("O campo nome deve ser prenchido");
    // Dúvida -> Devo passar até essas validações de erro?
    //cy.validarErroNomeVazio();
  });
  it("Cadastro com email vazio", () => {
    cy.preencherNomeCadastro(name);
    cy.preencherSenhaCadastro(password);
    cy.salvarCadastro();
    cy.validarErro("O campo e-mail deve ser prenchido corretamente");
  });
  it("Cadastro com senha vazia", () => {
    cy.preencherNomeCadastro(name);
    cy.preencherEmailCadastro(email);
    cy.salvarCadastro();
    cy.validarErro("O campo senha deve ter pelo menos 6 dígitos");
  });
  it("Cadastro com campos vazios", () => {
    cy.salvarCadastro();
    cy.validarErro("O campo nome deve ser prenchido");
  });
  it("Cadastro com email inválido", () => {
    cy.preencherNomeCadastro(name);
    cy.preencherEmailCadastro("teste.com");
    cy.preencherSenhaCadastro(password);
    cy.salvarCadastro();
    cy.validarErro("O campo e-mail deve ser prenchido corretamente");
  });
  it("Cadasro com senha inválida", () => {
    cy.preencherNomeCadastro(name);
    cy.preencherEmailCadastro(email);
    cy.preencherSenhaCadastro("12");
    cy.salvarCadastro();
    cy.validarErro("O campo senha deve ter pelo menos 6 dígitos");
  });
});
