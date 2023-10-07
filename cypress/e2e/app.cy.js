describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should display the placeholder', () => {
    cy.get('textarea').should('have.attr', 'placeholder', 'Take a note...');
  });

  it('Should add a new note', () => {
    cy.get('textarea[placeholder="Take a note..."]').click();
    cy.get('input[placeholder="Title"]').type('New note from cypress');
    cy.get('textarea').type('Description from cypress');
    cy.get('button[type="submit"]').click();

    cy.contains('New note from cypress').should('be.visible');
    cy.contains('Description from cypress').should('be.visible');
  });
});
