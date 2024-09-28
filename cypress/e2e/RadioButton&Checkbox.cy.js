describe('Example of Radio and check box', () =>{
    it("Checking Radio Buttons", () => {
        // Visiting the URL of the test page
        cy.visit("https://testautomationpractice.blogspot.com/");
      
        // Visibility of radio buttons
        cy.get("input#male").should('be.visible');   // Asserts that the 'male' radio button is visible
        cy.get("input#female").should('be.visible'); // Asserts that the 'female' radio button is visible
      
        // Selecting radio buttons
        cy.get("input#male").check().should('be.checked');         // Checks the 'male' radio button and asserts it is checked
        cy.get("input#female").should('not.be.checked');           // Asserts that 'female' is not checked
      
        cy.get("input#female").check().should('be.checked');       // Checks the 'female' radio button and asserts it is checked
        cy.get("input#male").should('not.be.checked');             // Asserts that 'male' is not checked
      });
      
    
      it('checking check box', () => {
        // Visit the page
        cy.visit("https://testautomationpractice.blogspot.com/");
    
        // Ensure that the checkbox for 'Sunday' is visible, check it, and assert that it is checked
        cy.get('input#sunday').should('be.visible')
          .check().should('be.checked');
    
        // Uncheck the 'Sunday' checkbox and assert that it is not checked
        cy.get('input#sunday').uncheck().should('not.be.checked');
    });

    it.only('checkbox all',() =>{
        // Visit the page
    cy.visit("https://testautomationpractice.blogspot.com/");
    
    // Select the first checkbox and check it
    cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked');

    // Select the last checkbox and check it
    cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked');

    // Select all checkboxes and check them
    cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');
        

    });
    
});