describe('Login - credenciales inválidas', () => {
  it('debe de mostrar error con contraseña incorrecta', () => {
    cy.fixture('users').then(({ invalid }) => {
      cy.login(invalid.username, invalid.password)
      cy.url().should('include', 'login.html')
      cy.get('#flash').should('contain.text', 'Usuario o contraseña inválidos')
    })
  })
})
