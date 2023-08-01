/// <reference types="cypress" />

describe('Cooperation - E2E for AMKM group', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit(url.cooperationUrl);
  });

  it('Should open home page, verify url and title', () => {
    cy.url().should('eq', url.cooperationUrl);
    cy.title().should('contain', 'Cooperation – Home – amkm group');
  });

  it('Should check all img is visible', () => {
    cy.get('img').should('have.length', 19).and('be.visible'); // 20 obrazków łaącznie z mobilna
  });

  it('Should verify slider buttons ( url and title )', () => {
    cy.get('.tb_text_wrap').find('h1').should('have.text', 'Cooperation');
    cy.contains('Learn more').click({ force: true });
    cy.url().should('eq', url.contactUrl);
    cy.title().should('eq', 'Contact – Home – amkm group');
  });

  it('Sould verify image and correct text', () => {
    cy.get('.tb_text_wrap').find('h2').should('contain', 'Full interior design services');
    cy.get('.tb_text_wrap').find('p').should('contain', 'We represent brands');
    cy.get('.wp-image-577').should('be.visible');
  });

  //   it.only('Should verify main partners section image and correct url', () => {
  //     cy.get('.subrow_inner.col_align_middle.tb_col_count_6.tf_box.tf_w').find('a').should('have.length', 6);
  //     cy.checkLinksUrls('.subrow_inner.col_align_middle.tb_col_count_6.tf_box.tf_w a');
  //   });

  it('Should verify contact section buttons ( url and title )', () => {
    cy.get('.tb_text_wrap').find('h1').should('have.text', 'Cooperation');
    cy.contains('Contact Us').click({ force: true });
    cy.url().should('eq', url.contactUrl);
    cy.title().should('eq', 'Contact – Home – amkm group');
  });
});
