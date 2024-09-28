// Test Suite: Demonstrating Cypress Navigation Commands
describe('My Suite - Navigation Commands Example', () => {

    // Test Case 1: Using Cypress Navigation Commands
    it('Navigation Commands Example', () => {
      
      cy.visit('https://www.guru99.com/');
  
      // Step 2: Click on the "About Us" link using a custom `clickLink` command
      cy.clickLink('about Us');
  
      // Step 3: Verify that the "About Us" page has loaded successfully
      cy.get("#post-67 > div > header > h1")
        .should('have.text', 'About Us'); // Assert that the header text is "About Us"
  
      // Step 4: Use the `cy.go('back')` command to navigate back to the previous page
      cy.go('back');
  
      // Step 5: Verify that the previous page is the "Tutorials Library" section
      cy.get("#post-2669 > div > div.entry-content.single-content > h2:nth-child(4)")
        .should('have.text', 'Tutorials Library'); // Assert that the header text is "Tutorials Library"
    // Step 6: Use the `cy.go('forward')` command to navigate forward to the "About Us" page again
      cy.go('forward');
  
      // Step 7: Verify that the "About Us" page is displayed again
      cy.get("#post-67 > div > header > h1")
        .should('have.text', 'About Us');
  
      // Step 8: Use the `cy.reload()` command to reload the "About Us" page
      cy.reload();
  
      // Step 9: Verify that the "About Us" page is still displayed after reload
      cy.get("#post-67 > div > header > h1")
        .should('have.text', 'About Us');
    });
  
  });
  