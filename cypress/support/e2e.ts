import './commands'
import 'allure-cypress/commands'
import './isolationCommands'
import '@percy/cypress';

beforeEach(() => {
    if (Cypress.env('isMobile')) {
        cy.viewport(393, 852)
    }
})