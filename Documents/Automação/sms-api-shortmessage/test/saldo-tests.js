var request = require('supertest');
var should = require('should');
var testBase = require('../config/testbase.js');

describe('Shortmessage - Saldo', function() {

  var urlLogin = testBase.getBaseUrl();
  var url = testBase.getUrl();
  var user = require('../data/default-data.json');

  it('POST /Saldo - Obter Saldo com 2FA, com saldo', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11943586975',
      "Text": 'Saldo'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });
  
  it('POST /Saldo - Obter Saldo sem 2FA, sem saldo', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11995789199',
      "Text": 'saldo'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Saldo - Obter Saldo com 2FA, sem saldo', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11989031805',
      "Text": 'saldo'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Saldo - Usuário blacklist', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11994267770',
      "Text": 'saldo'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

});
