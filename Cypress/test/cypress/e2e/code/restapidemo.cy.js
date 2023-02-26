describe('Http example',function(){

  it('GET',function(){
    cy.request({
        method : 'GET',
        url : 'https://httpbin.org/get',

    }).then(function(response){
        expect(response.body).have.property('url');
    })
  });
  it('POST',function(){
    cy.request({
        method : 'POST',
        url : 'https://httpbin.org/post',
        body : {
          "name" : "Pramod",
          "age"  : 27
        },
        headers : {
          'content-type' : 'application/json'
        }

    }).then(function(response){
        expect(response.body).have.property('json');
        expect(response.body.json).to.deep.equal({
          "name" : "Pramod",
          "age"  : 27
        });
    })
  });

  it('PUT',function(){
    cy.request({
        method : 'PUT',
        url : 'https://httpbin.org/put',
        body : {
          "name" : "Gauri",
        }

    }).then(function(response){
        expect(response.body).to.have.property('json');
        expect(response.body.json).to.deep.equal({
          "name" : "Gauri",
        });
    })
  });

  it('PATCH',function(){
    cy.request({
        method : 'PATCH',
        url : 'https://httpbin.org/patch',
        body : {
          "name" : "Gauri",
        }

    }).then(function(response){
        expect(response.body).to.have.property('json');
        expect(response.body.json).to.deep.equal({
          "name" : "Gauri",
        });
    })
  });


});