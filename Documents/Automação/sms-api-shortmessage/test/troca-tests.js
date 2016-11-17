var request = require('supertest');
var should = require('should');
var testBase = require('../config/testbase.js');

describe('Shortmessage - Troca', function() {

  var urlLogin = testBase.getBaseUrl();
  var url = testBase.getUrl();
  var user = require('../data/default-data.json');

  it('POST /Troca - Obter Troca com 2FA, com saldo', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11968589575',
      "Text": 'troca'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Troca - Obter Troca sem 2FA, sem saldo', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11995789199',
      "Text": 'troca'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Troca - Obter Troca com 2FA, sem saldo', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11987978798',
      "Text": 'troca'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Troca - Usuário blacklist', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11994267770',
      "Text": 'troca'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

});
