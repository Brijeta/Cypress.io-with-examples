// Import necessary Cypress plugins for iframe handling and drag-and-drop support
import 'cypress-iframe';
import '@4tw/cypress-drag-drop';

describe('Mouse Operations in Cypress', () => {

  // Test 1: Mouse Hover Operation
  it('Mouse hover operation and click on the link', () => {
    cy.visit("https://stqatools.com/demo/MouseHover.php");

    // Trigger mouseover event and click on the dropdown menu
    cy.get('.dropbtn').trigger('mouseover').click();

    // Click on the 'Link 1' option from the dropdown
    cy.get("div[class$='dropdown-content'] > a:nth-child(1)")
      .contains('Link 1')
      .click({ force: true }); // Use `{force: true}` to handle any overlap issues
  });

  // Test 2: Right Click using `.trigger('contextmenu')`
  it('Right click using .trigger()', () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    // Perform a right-click using `contextmenu` event
    cy.get("span[class='context-menu-one btn btn-neutral']")
      .trigger('contextmenu')
      .should('be.visible'); // Verify that the context menu is visible
  });

  // Test 3: Right Click using Cypress `.rightclick()` Method
  it('Right click using .rightclick()', () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    // Perform a right-click using Cypress's `.rightclick()` command
    cy.get("span[class='context-menu-one btn btn-neutral']")
      .rightclick()
      .should('be.visible'); // Verify that the context menu is visible
  });

  // Test 4: Double Click using Cypress `.dblclick()` Method
  it('Double click using .dblclick()', () => {
    cy.visit('https://testautomationpractice.blogspot.com/');

    // Perform a double-click using Cypress's `.dblclick()` command
    cy.get("[ondblclick$='myFunction1()']").dblclick();

    // Optional: Add assertion or validation for double-click action if needed
  });

  // Test 5: Double Click using `.trigger('dblclick')` Method
  it('Double click using .trigger("dblclick")', () => {
    cy.visit('https://testautomationpractice.blogspot.com/');

    // Perform a double-click using `.trigger('dblclick')` event
    cy.get("[ondblclick$='myFunction1()']").trigger('dblclick');

    // Verify that the text field has the value 'Hello World!' after the double-click
    cy.get("input[type='text'][id='field2']")
      .should('have.value', 'Hello World!');
  });

  // Test 6: Drag and Drop Operation using Plugin
  it('Drag and drop using cypress-drag-drop plugin', () => {
    cy.visit('https://testautomationpractice.blogspot.com/');

    // Wait for the elements to be visible before performing drag-and-drop
    cy.wait(2000);

    // Use `drag()` method to drag the draggable element to the droppable area
    cy.get("div > #draggable > p").drag("div > #droppable > p", { force: true });
  });

  // Test 7: Scroll the Page to a Specific Element
  it('Scroll the page to a specific element', () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    // Scroll the page until the first child link in `.widget-content` is in view
    cy.get('.widget-content>a:first-child()')
      .scrollIntoView({ duration: 3000 }) // Scroll smoothly for 3 seconds
      .should('be.visible'); // Ensure the element is visible after scrolling
  });

});
