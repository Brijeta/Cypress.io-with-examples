describe('Handle tab approaches', () => {

    // Approach 1: Remove the 'target' attribute to open the link in the same window
    it('Approach 1', () => {
        // Visit the page that has a link which opens in a new tab
        cy.visit('https://the-internet.herokuapp.com/windows');

        // Remove the 'target' attribute from the link so it opens in the same tab
        cy.get('div.example > a').invoke('removeAttr', 'target').click();

        // Assert that the new page's URL is correct
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

        // Go back to the parent window (previous page)
        cy.go('back');
    });

    // Approach 2: Extract the href property and visit the new tab's URL directly
    // Note: This approach has limitations, as it's not a true "new tab" navigation
    it('Approach 2', () => {
        // Visit the page with the link
        cy.visit('https://the-internet.herokuapp.com/windows');

        // Extract the URL of the new tab using jQuery's prop() method
        cy.get('.example > a').then((element) => {
            const childWindowUrl = element.prop('href');

            // Visit the extracted URL directly
            cy.visit(childWindowUrl);

            // Assert that the new page's URL is correct
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

            // Go back to the parent window (previous page)
            cy.go('back');
        });
    });

});
