describe('Cura Appointment app',function(){
  
    it('Visit the Url',function(){
        cy.visit('https://katalon-demo-cura.herokuapp.com/')

    });


    it('Click on Make Appointment',function(){
       // <a id="btn-make-appointment" href="./index.php#appointment" class="btn btn-dark btn-lg">Make Appointment</a>
       cy.contains('Make Appointment').click();
       //cy.get('#btn-make-appointment').click();
       cy.get('#txt-username').type('John Doe');
       cy.get('#txt-password').type('ThisIsNotPassword');
       cy.get('#btn-login').click();

    });

    it('Make Appointment',function(){
       //  <option value="Hongkong CURA Healthcare Center">Hongkong CURA Healthcare Center</option>
        cy.get('select').select('Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#radio_program_medicaid').click();
        cy.get('#txt_visit_date').type('30/03/2023');
        cy.get('#txt_comment').click({force: true});
        cy.get('#txt_comment').type('Gauri will be available on 30/03/2023');
        cy.get('#btn-book-appointment').click();

    });


    it('Verify Appointment',function(){
        cy.get('h2').contains('Appointment Confirmation');
        cy.get('#comment').contains('Gauri will be available on 30/03/2023');
        


    });



});