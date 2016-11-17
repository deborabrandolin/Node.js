var request = require('supertest');
var should = require('should');
var testBase = require('../config/testbase.js');

describe('Shortmessage - Autorizar', function() {

  var urlLogin = testBase.getBaseUrl();
  var url = testBase.getUrl();
  var user = require('../data/default-data.json');

  it('POST /Autorizar - Autorizar Troca com 2FA', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11985234040',
      "Text": 'autorizar'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Autorizar - Autorizar Troca sem 2FA', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11995789199',
      "Text": 'autorizar'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

  it('POST /Autorizar - Usuário blacklist', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11994267770',
      "Text": 'autorizar'
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });

});
