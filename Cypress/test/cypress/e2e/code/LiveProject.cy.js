describe('Test',function(){

    it('Sign up test',function(){
        cy.visit('https://react-redux.realworld.io/');
        cy.viewport('macbook-13');
        cy.get('a').contains('Sign up').click();
        cy.get('input[placeholder="Username"]').type(userID_Alpha());
        cy.get('input[placeholder="Email"]').type(userID_Alpha() + '@gmail.com');
        cy.get('input[placeholder="Password"]').type(userID_Alpha() + '234221');
        cy.get('button').contains('Sign in').click();
        cy.get('a').contains('Home').should('have.text','Home');
        cy.wait(2000);


    });
    //cy.contains('New Post')
   // #main > div > nav > div > ul > li:nth-child(2) > a

   it('New post and Verify',function(){
    cy.wait(2000);
    cy.contains('New Post').click();
    cy.get('input[placeholder="Article Title"]').type("DemoTest#1234");
    cy.get(':nth-child(2) > .form-control').type('newsday')
    cy.get(':nth-child(3) > .form-control').type('sdbcjsbcjhsbcjbdcdh')
    cy.get(':nth-child(4) > .form-control').type('sdfsfsf')
    cy.get('.btn').click();
    cy.get('.container h1').should('have.text','DemoTest#1234');
});  

    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i =0; i< 5; i++)
             text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text; 
    }




});