/// <reference types="Cypress" />

describe( 'Test Google Home Page', () => {
  it( 'Validate Cypress-axe', () => {
    cy.visit( Cypress.env( 'baseUrl' ) );
    cy.injectAxe();
    cy.checkA11y( {
      runOnly: [ 'cat.color' ],
    } );
  } );
} );
