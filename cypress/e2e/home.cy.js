/// <reference types="cypress" />

describe('Home - E2E for AMKM group', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should open home page, verify url and title', () => {
    cy.url().should('eq', url.homeUrl);
    cy.title().should('contain', 'amkm group – Supplier of upholstered furniture and home decor products');
  });

  it('Should check visibility of all img on page', () => {
    cy.get('body').find('img').should('be.visible');
  });

  it('Should check all links on page', () => {
    cy.requestCheckLink('a');
  });

  it('Visible of header elements: main nav, logo, language, loop', () => {
    cy.requestCheckLink('#headerwrap a[href]');
  });

  it('Should check correct url of "logo" and "home" link from main nav', () => {
    cy.contains('Home').click();
    cy.url().should('eq', url.homeUrl);
    cy.title().should('contain', 'amkm group – Supplier of upholstered furniture and home decor products');
    cy.checkLinksUrlsTitles('#site-logo a');
  });

  it('Should click on GTtranslate and verify visibilty of popup also correct language', () => {
    cy.get('[data-gt-lang="en"]').eq(0).should('be.visible').click();
    cy.get('.sub-menu a').should('have.length', 4);
  });

  it('should search phrase and verify correct title', () => {
    const searchTerm = 'About';
    cy.get('[aria-label="Search"]').eq(0).should('exist').click({ force: true });
    cy.get('form#searchform.tf_rel.tf_hide').invoke('show');
    cy.get('#s').invoke('show').type('About {enter}', { force: true });
    cy.get('.page-title em').should('contain', searchTerm);
  });

  it('Should verify title and correct url of seciton "about"', () => {
    cy.get('.tb_text_wrap').find('h2').eq(0).should('have.text', 'About AMKM GROUP');
    cy.get('.ui.builder_button.black').eq(0).click({ force: true });
    cy.url().should('eq', url.aboutUrl);
  });

  it('Should verify title and correct url of seciton "Our mission"', () => {
    cy.get('.tb_text_wrap').find('h2').eq(1).should('have.text', 'Our Mission');
    cy.get('.ui.builder_button.black').eq(1).click({ force: true });
    cy.url().should('eq', url.aboutUrl);
  });

  // it.only('Should verify visibilty of back to top button also verify correct url', () => {
  //   cy.get('[data-css_id="c9ji437"]').scrollIntoView();
  //   cy.get('.back-top-float').should('be.visible').click();
  //   cy.url().should('eq', url.homeUrl);
  // });
});
