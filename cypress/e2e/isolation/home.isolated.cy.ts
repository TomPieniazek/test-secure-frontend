/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { usersMocks } from "../../mocks/getAllUsers"
import { loginMocks } from "../../mocks/postSignIn"
import { loginPage } from "../../pages/LoginPageClass"
import users from "../../fixtures/users.json"

describe('Home page isolation tests', () => {
  beforeEach(() => {
    cy.openHomePage()
    cy.get('li').should('have.length', 4)
  })

  it('Land on Home page without login', () => {
    // given

    // when

    // then
    cy.get('li').each((row, index) => {
      // expect(row).to.contain.text(`${users[index].firstName} ${users[index].lastName}`)
      cy.wrap(row).should('contain.text', `${users[index].firstName} ${users[index].lastName}`)
    })
  })

})
