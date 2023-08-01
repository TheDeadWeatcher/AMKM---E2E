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

Cypress.Commands.add('requestCheckLink', ($selector) => {
  // cy.get($selector).should('be.visible');
  cy.get($selector).each(($el) => {
    const linkHref = $el.attr('href');
    cy.request(linkHref).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

Cypress.Commands.add('checkLinksUrlsTitles', ($selector) => {
  cy.get($selector).each(($link) => {
    cy.wrap($link).then(($link) => {
      const href = $link.attr('href');
      const linkTitle = $link.text().trim();
      cy.visit(href);
      cy.url().should('include', href);
      cy.title().should('contains', linkTitle);
      cy.go('back');
    });
  });
});

Cypress.Commands.add('checkLinksUrl', ($selector) => {
  cy.get($selector).each(($link) => {
    cy.wrap($link).then(($link) => {
      const href = $link.attr('href');
      cy.visit(href);
      cy.url().should('include', href);
      cy.go('back');
    });
  });
});

// Cypress.Commands.add('checkLinksUrls', ($selector1, $selector2, $selector3) => {
//   cy.get($selector1).find($selector2).should('contain', 'Online stores');
//   cy.get($selector1).find($selector3).should('contain', 'Our brands are unique');
//   cy.get($selector1).should('be.visible');
// });
