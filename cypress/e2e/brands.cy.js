/// <reference types="cypress" />

describe('Brands - E2E for AMKM group', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit(url.brandsUrl);
  });

  it('Should open home page, verify url and title', () => {
    cy.url().should('eq', url.brandsUrl);
    cy.title().should('contain', 'Brands – Home – amkm group');
  });

  it('Sould verify correct text of h2', () => {
    cy.get('.tb_text_wrap').find('h2').should('have.text', 'Our Brands');
    cy.get('.module_column.tb-column.col-full.tb_84ti674.first a').should('have.length', 5);
    cy.checkLinksUrl('.module_column.tb-column.col-full.tb_84ti674.first a');
  });
});
