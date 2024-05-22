/// <reference types="cypress" />

import users from "../../fixtures/users.json"
import { homePage } from "../../pages/homePageObject"
import { deleteUserMocks } from "../../mocks/deleteUser"

describe('Delete isolation tests', () => {
  const userToDelete = users[1]

  beforeEach(() => {
    cy.openHomePage()
    cy.get('li').should('have.length', 4)
  })

  it('Delete user #2', () => {
    const user = `${userToDelete.firstName} ${userToDelete.lastName}`

    cy.get('li').contains(user).should('exist')
    deleteUserMocks.success(userToDelete.username)
    homePage.clickDeleteOnRowContaining(user)
    cy.get('li').contains(user).should('not.exist')
    cy.get('li').should('have.length', 3)
  })

  it('Verify chrome alert', () => {
    const user = `${userToDelete.firstName} ${userToDelete.lastName}`

    Cypress.on('window:confirm', (confirmationText) => {
      expect(confirmationText).to.eq('Are you sure you wish to delete this item?')
      return false
    })

    cy.get('li').contains(user).should('exist')
    homePage.clickDeleteOnRowContaining(user)
    cy.get('li').should('have.length', 4)
  })

})
