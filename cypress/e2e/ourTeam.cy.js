/// <reference types="cypress" />

describe('Our team - E2E for AMKM group', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit(url.ourTeamUrl);
  });

  it('Should open home page, verify url and title', () => {
    cy.url().should('eq', url.ourTeamUrl);
    cy.title().should('contain', 'Our Team – Home – amkm group');
  });

  it('Should check all img is visible', () => {
    cy.get('.image-wrap.tf_rel.tf_mw img').should('have.length', 4).and('be.visible');
  });

  it('Should check all h1 is visible, and have correct txt', () => {
    cy.get('h1').should('have.length', 1);
    cy.get('h1').should('contain', 'Our Team');
    cy.get('p').should('contain', 'We are a team of planners, creatives and forward-thinking individuals.');
  });
  it.only('Should check worker profile "a" tag and correct url', () => {
    cy.get('.image-title a').should('have.length', 6).and('be.visible');
    cy.checkLinksUrlsTitles('.image-title a');
  });
});
