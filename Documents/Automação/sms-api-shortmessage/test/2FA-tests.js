var request = require('supertest');
var should = require('should');
var testBase = require('../config/testbase.js');

describe('Shortmessage - 2FA', function() {
  var urlLogin = testBase.getBaseUrl();
  var url = testBase.getUrl();
  var user = require('../data/default-data.json');

  it('POST /Ativar 2FA - Já existe o token', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11985234040',
      "Text": 'ativar 01320081142'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Ativar 2FA - Ativar 2FA', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11987978798',
      "Text": 'ativar 63569445879'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Ativar 2FA - Usuário Blacklist com 2FA', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11994267770',
      "Text": 'ativar 58962463741'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Ativar 2FA - CPF Inválido', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11998555555',
      "Text": 'ativar 98798798789'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Ativar 2FA - CPF não cadastrado na Dotz', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11998555555',
      "Text": 'ativar 91900507897'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

});
