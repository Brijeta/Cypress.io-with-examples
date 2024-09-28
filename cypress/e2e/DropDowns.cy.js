describe('Handle Dropdowns', () => {

    it('Dropdowns with select', () => {
        // Visit the website
        cy.visit("https://testautomationpractice.blogspot.com/");

        // Select 'Canada' from the dropdown and assert its value
        cy.get('select.form-control#country')
          .select('Canada') // Selecting the option 'Canada' from the dropdown
          .should('have.value', 'canada'); // Asserting that the selected value is 'canada'
    });


    it('Dropdowns without select', () => {
        // Visit the website
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        
        // Open the dropdown by clicking the Select2 container
        cy.get('#select2-reasondummy-container')
          .click(); // Click to open the dropdown
        
        // Type 'Visa extension' into the search field and press enter
        cy.get('.select2-search__field') // Input field for Select2 dropdown
          .type('Visa extension{enter}');
        
        // Assert that the selected value is 'Visa extension' in the dropdown container
        cy.get('#select2-reasondummy-container')
          .should('contain.text', 'Visa extension');
    });

    it.only('DropDown with auto-suggestion dynamic value', () => {
        // Visit the Google homepage
        cy.visit("https://www.google.ca/");
    
        // Type 'cypress' into the search input field
        cy.get("textarea[name='q']").type("cypress");
    
        //Approach 1 : Use .contains() to find and click the suggestion directly
        //cy.get('div.wM6W7d').contains('cypress hill').click();

        //Approach 2 :Iterate through each auto-suggestion element (using jQuery to access the text)
        cy.get('div.wM6W7d').each(($el, index, $list) => {
            // Check if the suggestion text is exactly 'cypress'
            if ($el.text() === 'cypress') {
                // If the text matches, wrap the element and click it
                cy.wrap($el).click();
            }
        });
    
        // After selecting the suggestion, verify that the search input contains 'cypress'
        cy.get("textarea[name='q']").should('have.value', 'cypress');
    });
    
    

});
