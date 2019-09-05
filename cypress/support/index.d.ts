// load type definitions that come with Cypress module
/// <reference types="cypress" />

// tslint:disable-next-line:no-namespace
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    dataCy( value: string ): Chainable<Element>;

    /**
     * Command from `cypress-axe` to inject Axe core library.
     * @see https://github.com/avanslaars/cypress-axe
     * @example
     *  cy.visit('/')
     *  cy.injectAxe()
     */
    // tslint:disable-next-line:no-any
    injectAxe(): Chainable<any>;

    /**
     * Run a11y tests or only a subset of all tests
     * @see https://github.com/avanslaars/cypress-axe
     * @example
     *  cy.checkA11y()
     */
    // tslint:disable-next-line:no-any
    checkA11y( arg: any ): Chainable<any>;
  }
}
