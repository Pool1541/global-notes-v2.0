/// <reference types="cypress" />

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
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500);
  });

  it('Should modify a note', () => {
    const noteTitle = 'Updated at ' + new Date().getTime();
    cy.get('button[title="Edit"]').first().click();

    cy.get('.sc-hBxehG').as('titleInput');
    cy.get('.sc-fnGiBr').as('descriptionInput');

    cy.get('@titleInput').clear();
    cy.get('@titleInput').type(noteTitle);
    cy.get('@descriptionInput').clear();
    cy.get('@descriptionInput').type('Description updated');
    cy.get('.sc-jrcTuL > :nth-child(1) > button[title="Update"]').click();

    cy.contains(noteTitle).should('be.visible');
  });
});
