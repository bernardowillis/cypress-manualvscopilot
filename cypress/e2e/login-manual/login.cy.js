describe('Login Page Tests', () => {
  beforeEach(() => {
    // visitar la página de login antes de cada prueba
    cy.visit('/login');
  });

  // LOGIN-003: Visualización inicial de campos y títulos
  it('should display all static UI elements correctly', () => {
    // verificar título y descripción
    cy.contains('h2', 'FAAAB AIOps').should('be.visible');
    cy.contains('p', 'Inicia sesión para continuar').should('be.visible');
    
    // verificar campos de entrada y sus etiquetas
    cy.contains('label', 'Email').should('be.visible');
    cy.contains('label', 'Password').should('be.visible');
    
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    
    // verificar botón de inicio de sesión
    cy.get('button[type="submit"]').should('be.visible');
  });

  // LOGIN-001: Inicio de sesión exitoso
  it('should login successfully with valid credentials', () => {
    // ingresar credenciales válidas
    cy.get('input[type="email"]').type('test@gmail.com');
    cy.get('input[type="password"]').type('password123');
    
    // hacer clic en el botón de inicio de sesión
    cy.get('button[type="submit"]').click();

    // verificar que el botón muestre estado de carga
    cy.get('button[type="submit"]').should('have.css', 'background-color', 'rgb(204, 204, 204)');

    // esperar a que el token aparezca
    cy.contains('Token copied to clipboard').should('not.exist');
    cy.get('textarea').should('exist').and('not.be.empty');

    // verificar que los botones de acción estén presentes (Copy y Download)
    cy.contains('button', 'Copy').should('be.visible');
    cy.contains('button', 'Download').should('be.visible');
  });

  // LOGIN-002: Inicio de sesion fallido
  it('should display error message with invalid credentials', () => {
    // ingresar credenciales inválidas
    cy.get('input[type="email"]').type('test@gmail.com');
    cy.get('input[type="password"]').type('invalido123');
    
    // hacer clic en el botón de inicio de sesión
    cy.get('button[type="submit"]').click();

    // verificar que el botón ya no esté en estado de carga
    cy.get('button[type="submit"]').should('not.have.css', 'background-color', 'rgb(204, 204, 204)');

    // verificar que se muestre el mensaje de error
    cy.contains('Firebase: Error (auth/invalid-credential).').should('be.visible');

    // verificar que permanecemos en la página de login
    cy.url().should('include', '/login');
  });
});
