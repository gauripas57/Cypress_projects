require('cypress-downloadfile/lib/downloadFileCommand')

describe('Download Demo', function (){
  
    it('Download',function (){

        cy.downloadFile('https://www.africau.edu/images/default/sample.pdf','Download','demo.pdf')
    })



})