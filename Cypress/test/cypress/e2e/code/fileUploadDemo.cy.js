describe('Upload the file',function (){

it('Upload the file and assert the name of the file uploaded',function(){

    const filePath = "image.jpg";
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile(filePath);
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").contains('image.jpg')


});


});