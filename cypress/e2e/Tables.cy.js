describe('Interact with OpenCart Admin Tables', () => {

    // The `beforeEach` hook runs before each test case to handle the login and navigation steps
    beforeEach('Login and navigate to the Customers section', () => {
      // Step 1: Visit the OpenCart Admin login page
      cy.visit("https://demo.opencart.com/admin/", { failOnStatusCode: false });
  
      // Step 2: Pause the test to manually solve CAPTCHA if necessary
      cy.pause();
  
      // Step 3: Enter the demo credentials in the login form
      cy.get("input[name='username']").should('be.visible').clear().type("demo");
      cy.get("input[name='password']").should('be.visible').clear().type("demo");
  
      // Step 4: Click the Login button
      cy.get("button[type='submit'][class='btn btn-primary']").click();
  
      // Step 5: Navigate to the 'Customers' section from the menu
      cy.get("ul[id='menu']>li[id='menu-customer']").click();
      cy.get("ul#collapse-5>li>a").contains('Customers').click();
  
      // Step 6: Wait for the customers table to load
      cy.wait(5000);
    });
  
    // Test 1: Check the number of rows and columns in the customers table
    it('Check the number of rows and columns', () => {
      // Check the number of rows in the table's body
      cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .its('length')
        .should('be.greaterThan', 0); // Ensure there is at least one row
  
      // Check the number of columns in the table's header
      cy.get("table[class='table table-bordered table-hover']>thead>tr>td")
        .its('length')
        .should('be.greaterThan', 0); // Ensure there is at least one column
    });
  
    // Test 2: Check the data from a specific static row and column
    it('Check the data from a specific static row and column', () => {
      // Locate the 5th row and 3rd column in the table, and check if it contains the expected email
      cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .should('be.visible')
        .contains('johnnafady@gmail.com'); // Check for the expected email value
    });
  
    // Test 3: Read and log all the row and column data in the table
    it('Read all the row and column data', () => {
      // Iterate through each row in the table
      cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row) => {
        // Within each row, find all the columns (cells) and log their text
        cy.wrap($row).within(() => {
          cy.get("td").each(($col) => {
            cy.log($col.text()); // Log the text content of each cell
          });
        });
      });
    });
  
    // Test 4: Find out the number of pages available in the table
    it('Find out the number of pages', () => {
      // Extract the total number of pages from the pagination section
      let total_pages;
      cy.get(".col-sm-6.text-end").then((ele) => {
        const value = ele.text();
        total_pages = value.substring(value.indexOf("(") + 1, value.indexOf("Pages") - 1);
        cy.log("Total number of pages in the table: " + total_pages);
      });
    });
  
    // Test 5: Click on each page and read email addresses from all pages
    it.only('Click on each page and read email addresses', () => {
      // Define the total number of pages to iterate through
      let total_pages = 5; // Set the value based on previous test or manually
  
      // Loop through each page and read email addresses from the 3rd column
      for (let p = 1; p <= total_pages; p++) {
        // Check if there is more than one page
        if (total_pages > 1) {
          // Log the current active page number
          cy.log("Active page is: " + p);
  
          // Click on the corresponding page number in the pagination
          cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();
          cy.wait(3000); // Wait for the table to load
  
          // Read email addresses from the 3rd column of the current page
          cy.get("table[class='table table-bordered table-hover']>tbody>tr>td:nth-child(3)").each(($col) => {
            cy.wrap($col).within(() => {
              cy.log($col.text()); // Log the email addresses
            });
          });
        }
      }
    });
  
  });
  