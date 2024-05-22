import './commands'
import 'allure-cypress/commands'
import './isolationCommands'

beforeEach(() => {
    if (Cypress.env('isMobile')) {
        cy.viewport(393, 852)
    }
})