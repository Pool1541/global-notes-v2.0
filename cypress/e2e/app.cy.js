describe('Note Taking Application - Create and Modify Notes', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should display the placeholder', () => {
    cy.get('textarea').should('have.attr', 'placeholder', 'Take a note...');
  });

  it('Should add a new note', () => {
    const noteTitle = 'New note from cypress at ' + new Date().getTime();

    cy.get('textarea[placeholder="Take a note..."]').click();
    cy.get('input[placeholder="Title"]').type(noteTitle);
    cy.get('textarea').type('Description from cypress');
    cy.get('button[type="submit"]').click();

    cy.contains(noteTitle).should('be.visible');
    cy.contains('Description from cypress').should('be.visible');
  });
});
