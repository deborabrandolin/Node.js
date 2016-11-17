var request = require('supertest');
var should = require('should');
var testBase = require('../config/testbase.js');

describe('Shortmessage - Senha', function() {

  var urlLogin = testBase.getBaseUrl();
  var url = testBase.getUrl();
  var user = require('../data/default-data.json');


  it('POST /Senha - Obter Senha, com 2FA', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11985967895',
      "Text": 'senha'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Senha - Obter Senha, sem 2FA', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '21988978977',
      "Text": 'senha'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Senha - Usuário blacklist', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11994267770',
      "Text": 'senha'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

});
