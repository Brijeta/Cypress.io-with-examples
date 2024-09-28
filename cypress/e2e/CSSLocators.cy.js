describe('CSS Locators', () =>{
    it('Example of CSS Locators', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
        cy.get("[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").contains("Dashboard") //Assertion
        
    })
})