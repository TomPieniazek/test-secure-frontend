declare namespace Cypress {
    interface Chainable<Subject> {
        login(username: any, password: any): Chainable<any>
        register(user: any): Chainable<any>
        deleteUser(username: any, token: any): Chainable<any>
        getUserDetails(username: any, token: any): Chainable<any>
        openHomePage(): Chainable<any>
  }
}