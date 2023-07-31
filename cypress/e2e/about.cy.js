/// <reference types="cypress" />

describe('About - E2E for AMKM group', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit(url.aboutUrl);
  });

  it('Should open home page, verify url and title', () => {
    cy.url().should('eq', url.aboutUrl);
    cy.title().should('contain', 'About – Home – amkm group');
  });

  it('Should check all img is visible', () => {
    cy.get('.image-wrap.tf_rel.tf_mw img').should('have.length', 4).and('be.visible');
  });

  it.only('Should check all h1 is visible, and have correct txt', () => {
    cy.get('h1').should('have.length', 2);
    cy.get('h1').eq(0).should('contain', 'About');
    cy.get('h1').eq(1).should('contain', 'Our mission');
    cy.get('p').should('contain', 'The aim of the AMKM').and('contain', 'We promote sustainable design.');
  });
});
