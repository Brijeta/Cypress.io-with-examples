// Test Suite: Capturing Screenshots and Videos in Cypress
describe('Capture Screenshots and Videos', () => {

    // Test Case 1: Automatically Capture Screenshot and Video on Test Failure (CLI Execution)
    it('Test 1 - Search on Google and Capture Video on Failure', () => {
  
      // Step 1: Visit the Google homepage
      cy.visit("https://www.google.com");
  
      // Step 2: Perform a search by typing into the Google search bar
      // Note: The CSS selector "textarea.gLFyf" is used to target the search bar
      cy.get("textarea.gLFyf").type("cypress{enter}");
  
      // Tip: Cypress will automatically capture screenshots and videos for failed tests 
      // when running in headless mode using the `npx cypress run` command.
    });
  
  });
  