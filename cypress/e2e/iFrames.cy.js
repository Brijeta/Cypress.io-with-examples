import 'cypress-iframe'
describe('Handling Frames in Cypress', () => {
  
   // Approach 1) : Test Case 1: Directly handling the iframe
   it('Approach 1: Handle iframe directly', () => {
     // Step 1: Visit the target URL where the iframe is present
     cy.visit("https://jqueryui.com/button/");
 
     // Step 2: Locate the iframe using its class name
     const iframe = cy.get('.demo-frame')
       // Step 3: Access the iframe's body using `its()` and `contentDocument.body`
       .its('0.contentDocument.body')
       // Step 4: Ensure that the iframe's body is visible
       .should('be.visible')
       // Step 5: Use `cy.wrap()` to wrap the iframe body so Cypress can interact with its elements
       .then(cy.wrap)
       // Step 6: Use `.within()` to scope all following commands within the iframe
       .within(() => {
         // Step 7: Click the "Submit" button inside the iframe
         cy.get("input[type='submit'][role='button']").click();
       });
   });
 
   //Appraoch 2) : Test Case 2: Handling the iframe using a custom command
   it('Approach 2: Handle iframe using custom command', () => {
     // Step 1: Visit the target URL where the iframe is present
     cy.visit("https://jqueryui.com/button/");
     
     // Step 2: Use the custom Cypress command `getiframe` to access the iframe's body
     cy.getiframe('.demo-frame').within(() => {
       // Step 3: Click the "Submit" button inside the iframe
       cy.get("input[type='submit'][role='button']").click();
     });
   });

   it('Approach 3: Handle iframe using the cypress-iframe plugin', () => {
    
      // Step 1: Visit the target URL containing the iframe
      cy.visit("https://jqueryui.com/button/");
      
      // Step 2: Use `frameLoaded()` to confirm the iframe has been fully loaded.
      // This command helps ensure the iframe's contents are accessible.
      cy.frameLoaded('.demo-frame');
  
      // Step 3: Use `iframe()` to select and interact with the elements inside the iframe.
      // We chain `iframe()` to access the iframe's internal content.
      cy.iframe('.demo-frame')
        .find("input[type='submit'][role='button']")  // Locate the Submit button inside the iframe
        .click();                                    // Click on the button
  
    });
  
 
 });
 