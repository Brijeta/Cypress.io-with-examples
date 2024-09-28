describe('Handle different alerts', () => {

    // Test for simple alert
    it('Simple alert', () => {
        // Visit the page
        cy.visit("https://testautomationpractice.blogspot.com/");

        // Trigger the alert and handle the alert window
        cy.get("button[onClick='myFunctionAlert()']").click();
        cy.on('window:alert', (text) => {
            // Assert that the alert text contains the expected message
            expect(text).to.contains('I am an alert box!');
        });
    });

    // Test for confirmation alert with auto OK button
    it('Confirmation alert by auto OK button', () => {
        // Visit the page
        cy.visit("https://testautomationpractice.blogspot.com/");

        // Trigger the confirmation alert and auto click OK
        cy.get("button[onClick='myFunctionConfirm()']").click();
        cy.on('window:confirm', (text) => {
            // Assert that the confirmation alert contains the expected message
            expect(text).to.contains('Press a button!');
        });

        // Assert that after clicking OK, the message changes accordingly
        cy.get('#demo').should('have.text', 'You pressed OK!');
    });

    // Test for confirmation alert with Cancel button
    it('Confirmation alert by Cancel button', () => {
        // Visit the page
        cy.visit("https://testautomationpractice.blogspot.com/");

        // Trigger the confirmation alert and click Cancel
        cy.get("button[onClick='myFunctionConfirm()']").click();
        cy.on('window:confirm', () => false); // Simulate clicking Cancel

        // Assert that after clicking Cancel, the message changes accordingly
        cy.get('#demo').should('have.text', 'You pressed Cancel!');
    });

    // Test for prompt alert with OK button
    it('Prompt alert window by OK button', () => {
        // Visit the page
        cy.visit("https://testautomationpractice.blogspot.com/");

        // Stub the window.prompt and simulate user input
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Hardi');
        });

        // Trigger the prompt and handle the input
        cy.get("button[onClick='myFunctionPrompt()']").click();

        // Assert that after clicking OK, the text shows the correct message
        cy.get('#demo').should('have.text', 'Hello Hardi! How are you today?');
    });

    // Test for prompt alert with Cancel button
    it('Prompt alert window by Cancel button', () => {
        // Visit the page
        cy.visit("https://testautomationpractice.blogspot.com/");

        // Stub the window.prompt to simulate user input
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Hardi');
        });

        // Trigger the prompt and simulate clicking Cancel
        cy.get("button[onClick='myFunctionPrompt()']").click();
        cy.on('window:prompt', () => false); // Simulate clicking Cancel

        // Assert that after clicking Cancel, the message doesn't change (check logic)
        cy.get('#demo').should('have.text', 'Hello Hardi! How are you today?');
    });

    // Test for handling basic authentication alert
    it('Authentication alert', () => {
        // Approach 1: Use the Cypress built-in auth option
        // cy.visit("https://the-internet.herokuapp.com/basic_auth", {
        //     auth: { username: "admin", password: "admin" }
        // });
        // cy.get('div.example').should('contain.text', 'Congratulations');

        // Approach 2: Embed credentials in the URL
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");

        // Assert that the page loads successfully after authentication
        cy.get('div.example').should('contain.text', 'Congratulations');
    });

});
