describe('My Test Suite for OrangeHRM', () => {
    // Define a variable to hold the fixture data
    let userdata;
  
    // `before` hook: Load the fixture data once before all tests run
    before('Load data from orangeHRM fixture file', () => {
      // Load the data from the `orangeHRM.json` fixture file and assign it to the `userdata` variable
      cy.fixture('orangeHRM').then((data) => {
        userdata = data; // Store the fixture data in `userdata` for use in multiple tests
      });
    });
  
    // Test 1: Using fixture data directly within the `it` block
    it.skip('Fixtures Demo Test - Using `cy.fixture` in the same block', () => {
      // Visit the OrangeHRM login page
      cy.visit("https://opensource-demo.orangehrmlive.com/");
  
      // Use `cy.fixture()` to directly access the data within the `it` block
      cy.fixture('orangeHRM').then((data) => {
        // Use the data to fill out the login form
        cy.get("[placeholder='Username']").type(data.username);
        cy.get("[placeholder='Password']").type(data.password);
  
        // Click the login button
        cy.get("[type='submit']").click();
  
        // Validate that the logged-in user is on the expected page
        cy.get("span>h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")
          .should('have.text', data.expected); // Verify that the text matches the `expected` value from the fixture
      });
    });
  
    // Test 2: Accessing fixture data via the `before` hook for use in multiple `it` blocks
    it('Fixture Demo Test 2 - Using data from `before` hook', () => {
      // Visit the OrangeHRM login page
      cy.visit("https://opensource-demo.orangehrmlive.com/");
  
      // Use the data loaded in the `before` hook to fill out the login form
      cy.get("[placeholder='Username']").type(userdata.username);
      cy.get("[placeholder='Password']").type(userdata.password);
  
      // Click the login button
      cy.get("[type='submit']").click();
  
      // Validate that the logged-in user is on the expected page
      cy.get("span>h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")
        .should('have.text', userdata.expected); // Verify that the text matches the `expected` value from the fixture
    });
  
  });
  