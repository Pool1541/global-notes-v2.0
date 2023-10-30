/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

describe('Notes Application - Create and Modify Notes', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.esXMAm div').first().as('firstNote');
  });

  it('Should display the placeholder', () => {
    cy.get('textarea').should('have.attr', 'placeholder', 'Take a note...');
  });

  const noteTitle = 'New note from cypress at ' + new Date().getTime();

  it('Should add a new note', () => {
    cy.get('textarea[placeholder="Take a note..."]').click();
    cy.get('input[placeholder="Title"]').type(noteTitle);
    cy.get('textarea').type('Description from cypress');
    cy.get('button[type="submit"]').click();

    cy.wait(3000);

    cy.get('@firstNote').should('include.text', noteTitle);
  });

  it('Should modify a note', () => {
    const updatedTitle = 'Updated at ' + new Date().getTime();
    cy.get('@firstNote').find('button[title="Edit"]').click();

    cy.get('.sc-hBxehG').as('titleInput');
    cy.get('.sc-fnGiBr').as('descriptionInput');

    cy.get('@titleInput').clear();
    cy.get('@titleInput').type(updatedTitle);
    cy.get('@descriptionInput').clear();
    cy.get('@descriptionInput').type('Description updated');
    cy.get('@firstNote').find('button[title="Update"]').click();

    cy.contains(updatedTitle).should('be.visible');
  });
});
