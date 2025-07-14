export function acessarLogin() {
  cy.visit("/login");
}
export function login(email, password) {
  preencherEmail(email);
  preencherSenha(password);
  clicarLogin();
}
export function preencherEmail(email) {
  cy.get("#user").type(email);
}
export function preencherSenha(password) {
  cy.get("#password").type(password);
}
export function clicarLogin() {
  cy.get("#btnLogin").click();
}
