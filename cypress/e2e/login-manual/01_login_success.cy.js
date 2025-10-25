describe('Login - éxito', () => {
  it('debe de funcionar correctamente el login, mostrar login exitoso y hacer logout', () => {
    cy.fixture('users').then(({ valid }) => {
      cy.login(valid.username, valid.password)
      cy.url().should('include', 'secure.html')
      cy.get('#flash').should('contain.text', 'Login exitoso')
      cy.contains('button', 'Logout').click()
      cy.url().should('include', 'login.html')
    })
  })
})
