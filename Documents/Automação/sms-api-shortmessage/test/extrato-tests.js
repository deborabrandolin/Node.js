var request = require('supertest');
var should = require('should');
var testBase = require('../config/testbase.js');

describe('Shortmessage - Extrato', function() {

  var urlLogin = testBase.getBaseUrl();
  var url = testBase.getUrl();
  var user = require('../data/default-data.json');

  it('POST /Extrato - Obter Extrato com 2FA, com saldo', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11954219632',
      "Text": 'extrato'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Extrato - Obter Extrato sem 2FA, sem saldo', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11995789199',
      "Text": 'extrato'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Extrato - Obter Extrato com 2FA, sem saldo', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11989031805',
      "Text": 'extrato'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Extrato - Usuário blacklist', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11994267770',
      "Text": 'extrato'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });
});
