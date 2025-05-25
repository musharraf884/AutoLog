/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(): Chainable<void>
  }
}

Cypress.Commands.add("login", () => {
  // TODO: implement login using apis for easy portal login
  cy.visit("/");
  /*
  cy.get('input[data-test="email-input"]').should('be.visible').type(Cypress.env("email"),{force:true})
  cy.get('input[data-test="password-input"]').should('be.visible').type(Cypress.env("password"),{force:true})
  cy.get('button[type="submit"]').should('contain.text','Log In').click()
  */
  cy.get('#\\:r2\\:').type(Cypress.env("email"))
  cy.get('#\\:r3\\:').type(Cypress.env("password"))
  cy.get('.MuiButton-root').click();


});
