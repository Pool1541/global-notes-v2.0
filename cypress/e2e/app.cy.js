describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/global-notes-v2.0');
  });

  it('Should display the placeholder', () => {
    cy.get('textarea').should('have.attr', 'placeholder', 'Take a note...');
  });
});
