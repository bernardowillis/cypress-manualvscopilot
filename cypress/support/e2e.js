Cypress.Commands.add('login', (username, password) => {
  cy.visit('login.html')
  cy.get('#username').clear().type(username)
  cy.get('#password').clear().type(password, { log: false })
  cy.get('button[type="submit"]').click()
})
