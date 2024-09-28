// ***********************************************

// ***********************************************

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// For more comprehensive examples of custom
// commands, please read more here:
// https://on.cypress.io/custom-commands

// -- Parent Command Example --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- Child Command Example --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// -- Dual Command Example --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// -- Overwriting an Existing Command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom Command: Get iframe content and wrap it in Cypress commands
Cypress.Commands.add('getiframe', (iframelocator) => {
    return cy.get(iframelocator)
      .its('0.contentDocument.body') // Access the iframe's body
      .should('be.visible') // Ensure the iframe's body is visible
      .then(cy.wrap); // Wrap the iframe's body content for Cypress chaining
  });
  

 // Make sure this line ends correctly with the closing parenthesis and curly brace
  Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label,{matchCase : false}).click(); // Locate the link and click it using the label text
  });

  //custom command for login 
  Cypress.Commands.add('Login',(email,password)=>{
        cy.get("[name='username']").type(email)
        cy.get("[name='password']").type(password)
        cy.get("[type='submit']").click()

  })

  
  

    