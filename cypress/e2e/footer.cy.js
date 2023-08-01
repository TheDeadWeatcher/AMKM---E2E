/// <reference types="cypress" />

describe('Footer - E2E for AMKM group', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit(url.homeUrl);
  });

  it('Should verify all links in footer', () => {
    cy.get('[data-css_id="c9ji437"]').should('be.visible');
    cy.requestCheckLink('[data-css_id="c9ji437"] a');
    cy.checkLinksUrl('[data-css_id="c9ji437"] h5 a');
  });
});
