describe('Data-Driven Testing (DDT) for OrangeHRM Login', () => {
  
    // Main test block for Data-Driven Testing
    it('Data-Driven Test: Login with Multiple Sets of Data', () => {
      
      // Load the data from the `orangeHRM2.json` fixture file
      cy.fixture("orangeHRM2").then((data) => {
        
        // Visit the OrangeHRM login page once before running the test cases
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        
        // Iterate over each set of user data in the `orangeHRM2` fixture
        data.forEach((userdata) => {
          
          // Step 1: Enter the username and password for each user from the fixture file
          cy.get("[placeholder='Username']").clear().type(userdata.username);
          cy.get("[placeholder='Password']").clear().type(userdata.password);
  
          // Step 2: Click on the login button
          cy.get("[type='submit']").click();
  
          // Step 3: Perform assertions based on the credentials
          // Check if the login is successful for valid credentials
          if (userdata.username == "Admin" && userdata.password == "admin123") {
            
            // Assert that the user is logged in successfully by verifying the dashboard header text
            cy.get("span>h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")
            .should('have.text', userdata.expected);
  
            // Logout from the application after successful login
            cy.get(".oxd-userdropdown-tab >.oxd-icon").click() // Click on the user dropdown menu
            cy.get(":nth-child(4) > .oxd-userdropdown-link").click() // Click on the Logout option
            
          } else { // For invalid credentials
            
            // Assert that an error message is displayed for invalid credentials
            cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
            .should('have.text',userdata.expected)
  
          }
        });
      });
    });
  
  });
  