// `describe` block represents the main test suite
describe('My Test Suite with Hooks', () => {

    // `before` hook runs **once** before all the tests in this suite
    before('Launch Application', () => {
      cy.log("Launching the application");  // This runs before any test starts
    });
    // `after` hook runs **once** after all the tests in this suite have completed
    after('Close Application', () => {
      cy.log("Closing the application");  // This runs after all tests have been executed
    });
    // `beforeEach` hook runs **before each individual test** in the suite
    beforeEach('Login to the Application', () => {
      cy.log("Logging in");  // This runs before each test (like logging in before every action)
    });
    // `afterEach` hook runs **after each individual test** in the suite
    afterEach('Log out of the Application', () => {
      cy.log("Logging out");  // This runs after each test (like logging out after every action)
    });
    
    // Test 1: Search Test
    it.only('Perform Search Operation', () => {
      cy.log("************** Performing Search **************");  
    });

    // Test 2: Advanced Search (Skipped)
    it.skip('Perform Advanced Search Operation', () => {
      cy.log("************** Performing Advanced Search **************");
    });
  
    // Test 3: Listing Products Test
    it.only('List Products', () => {
      cy.log("************** Listing Products **************");
    });
  
  });
  