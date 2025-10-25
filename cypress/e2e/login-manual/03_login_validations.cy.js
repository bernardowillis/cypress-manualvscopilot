describe('Login - validaciones de UI', () => {
  beforeEach(() => {
    cy.visit('login.html')
  })

  it('debe de exigir usuario y contraseña antes de enviar', () => {
    cy.get('button[type="submit"]').click()
    cy.get('#flash').should('contain.text', 'Campos requeridos')
  })

  it('debe de mostrar un comentario al dejar username vacío', () => {
    cy.get('#password').type('anything')
    cy.get('button[type="submit"]').click()
    cy.get('#flash').should('contain.text', 'Campos requeridos')
  })

  it('debe de mostrar un comentario al dejar password vacío', () => {
    cy.get('#username').type('tomsmith')
    cy.get('button[type="submit"]').click()
    cy.get('#flash').should('contain.text', 'Campos requeridos')
  })
})
