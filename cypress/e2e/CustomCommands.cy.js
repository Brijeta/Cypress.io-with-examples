// Custom Commands Example Test Suite
describe("Custom Commands Examples", () => {
  
    // Test Case 1: Handling Links Without a Custom Command
    it("Handling Links Directly", () => {
      // Visit the Guru99 website
      cy.visit("https://www.guru99.com/");
  
      // Use a standard CSS selector to click the "About Us" link
      cy.get("#kt-layout-id_5c1b91-c0 > div > div.wp-block-kadence-column.inner-column-1.kadence-column_3ee1cc-0b > div > a:nth-child(3)").click();
  
      // Assert that the page title is "About Us"
      cy.get("#post-67 > div > header > h1")
        .should('have.text', 'About Us');
    });
  
    // Test Case 2: Handling Links Using a Custom Command (`clickLink`)
    it("Handling Links Using a Custom Command", () => {
      // Visit the Guru99 website
      cy.visit("https://www.guru99.com/");
  
      // Use the custom `clickLink` command to click the "About Us" link by its label text
      cy.clickLink('About Us');
  
      // Assert that the page title is "About Us"
      cy.get("#post-67 > div > header > h1")
        .should('have.text', 'About Us');
    });
  
    // Test Case 3: Overwriting the Existing `contains` Command
    it("Overwriting Existing Command to Ignore Case Sensitivity", () => {
      // Visit the Guru99 website
      cy.visit("https://www.guru99.com/");
  
      // Use the custom `clickLink` command with a text case mismatch
      cy.clickLink('about Us');  // Testing the case insensitivity feature of the overwritten command
  
      // Assert that the page title is "About Us"
      cy.get("#post-67 > div > header > h1")
        .should('have.text', 'About Us');
    });
  
    // Test Case 4: Using a Custom `Login` Command for the OrangeHRM Application
    it("Using a Custom `Login` Command", () => {
      // Visit the OrangeHRM login page
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  
      // Use the custom `Login` command to enter credentials and log in
      cy.Login("Admin", "admin123");
      
      // You can add more assertions here to validate successful login if needed
    });
  
  });
  