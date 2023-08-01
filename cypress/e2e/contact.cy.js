/// <reference types="cypress" />

describe('Contact - E2E for AMKM group', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit(url.contactUrl);
  });

  it('Should open home page, verify url and title', () => {
    cy.url().should('eq', url.contactUrl);
    cy.title().should('contain', 'Contact – Home – amkm group');
  });

  it('Sould verify image and correct text', () => {
    cy.get('.tb_text_wrap').find('h1').should('have.text', 'Contact');
    cy.get('.tb_text_wrap').find('p').should('contain', 'Are you read');
    cy.get('.wp-image-459').should('be.visible');
  });

  it('Should verify lenght of contact middle module', () => {
    cy.get('.module_column.tb-column.col-full.tb_45jh400.first p').should('have.length', 3);
    cy.get('.tb_text_wrap').find('h3').should('contain', 'Call Us');
    cy.get('.tb_text_wrap').find('p').should('contain', '+48 601 989 344');
  });

  it('Should verify h2 correct text of form section', () => {
    cy.get('.tb_text_wrap').find('h2').should('contain', 'CONTACT FORM');
  });
  it.only('should fill correctly data, send the message, verify text info after send', () => {
    cy.get('#tb_qbje890-contact-name').should('be.visible');
    cy.get('#tb_qbje890-contact-name').type('Bartosz');
    cy.get('#tb_qbje890-contact-email').should('be.visible');
    cy.get('#tb_qbje890-contact-email').type('info@outthebox.pl');
    cy.get('#tb_qbje890-contact-subject').should('be.visible');
    cy.get('#tb_qbje890-contact-subject').type('Test');
    cy.get('#tb_qbje890-contact-message').should('be.visible');
    cy.get('#tb_qbje890-contact-message').type(
      'Jest to test automatyczny używający JavaScript w celu sprawdzenia twojej strony po aktualizacji'
    );
    cy.wait(2000);
    cy.get('.btn').click();
    // cy.get('.contact-message').find('p').should('have.text', 'Message sent. Thank you.');
  });
});
