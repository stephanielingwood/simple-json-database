//Thanks to Linda Mummy for help with the tests.
'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var app = require('../lib/server.js')

var expect = chai.expect;

chai.use(chaihttp);

describe('Simple JSON Database', function(done) {

  it('should retrieve JSON from a file', function(done){
    chai.request('http://localhost:3000')
    .get('/some_name')
    .end(function(err, res) {
      expect(err).to.eql(null)
      console.log(res.body)
      expect(res).to.be.json
      expect(res.body).to.eql({"hello":"there2"})
      done();
    });
  });
});
