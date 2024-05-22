/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { usersMocks } from "../../mocks/getAllUsers"
import { loginMocks } from "../../mocks/postSignIn"
import { loginPage } from "../../pages/LoginPageClass"
import users from "../../fixtures/users.json"
import { homePage } from "../../pages/homePageObject"
import { editPage } from "../../pages/editPageObject"

describe('Edit page isolation tests', () => {
  const userToEdit = users[1]

  beforeEach(() => {
    cy.openHomePage()
    cy.get('li').should('have.length', 4)
    homePage.clickEditOnRowContaining(userToEdit.firstName)
  })

  it('Land on Home page without login', () => {
    // @ts-ignore
    editPage.verifyAutocompletion(userToEdit)
  })

})
