describe("Assertions Demo", () => {
    
    it('Implicit asseration Example', () => {
        // Visit the website
        cy.visit('https://testautomationpractice.blogspot.com/');
        
        // URL assertions
        cy.url().should('include', 'testautomationpractice')
               .and('eq', 'https://testautomationpractice.blogspot.com/')
               .and('not.contain', 'invalid-url');

        // Verify the title of the page
        cy.title().should('include', 'Automation')
                  .and('eq', 'Automation Testing Practice')
                  .and('not.include', 'framework');

        // Check for element existence and visibility
        cy.get('#name').should('exist')
                         .and('be.visible')
                         .and('have.class', 'form-control');

        // Check if a button is enabled and has the correct text
        cy.get('.start').should('be.enabled')
                        .and('contain.text', 'START');

        // Ensure an input field is empty
        cy.get('#email').should('have.value', '')
                             .and('be.visible');
    });
    
    it.only('Explicit asseration Example', () => {
    const user = { name: 'Alice', age: 25, skills: ['JavaScript', 'Cypress'] };
    
    // Type and Existence
    expect(user.name).to.be.a('string');
    expect(user.age).to.be.a('number');
    expect(user.skills).to.be.an('array').that.includes('Cypress');
    expect(user).to.exist;
    
    // Equality
    expect(user.name).to.equal('Alice');
    expect(user).to.deep.equal({ name: 'Alice', age: 25, skills: ['JavaScript', 'Cypress'] });
    
    // Property assertions
    expect(user).to.have.property('name', 'Alice');
    expect(user).to.have.deep.property('skills', ['JavaScript', 'Cypress']);
    
    // Length assertions
    expect(user.skills).to.have.lengthOf(2);
    
    // Numeric comparisons
    expect(user.age).to.be.above(20);
    expect(user.age).to.be.at.most(25);
    
    // Satisfy custom condition
    expect(user.age).to.satisfy((age) => age >= 18 && age <= 30);
    
    // String match
    expect(user.name).to.match(/^A/);
    
    // Array contents
    expect(user.skills).to.include('JavaScript');
    
    // Close to
    expect(5.1).to.be.closeTo(5, 0.2);
    
    // Error throwing
    const badFn = () => { throw new Error('Oops!'); };
    expect(badFn).to.throw('Oops!');

    });
});
