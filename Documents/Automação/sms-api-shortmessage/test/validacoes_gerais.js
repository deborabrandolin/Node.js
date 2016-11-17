var request = require('supertest');
var should = require('should');
var testBase = require('../config/testbase.js');

describe('Shortmessage - Validações gerais estrutura válida e inválida', function() {
  var urlLogin = testBase.getBaseUrl();
  var url = testBase.getUrl();
  var user = require('../data/default-data.json');

  it('POST /Validar - Valores do campo Sender em branco', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": ' ',
      "Text": 'autorizar'
    })
    .end(function(err, res) {
      should.equal(res.status, 400, testBase.getStatusCodeMessage());
      should(res.body.message, '"The parameter \"Sender\" should not be empty or null."');
      done();
    });
  });

  it('POST /Validar - Valores do campo Text em branco', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11998528598',
      "Text": ' '
    })
    .end(function(err, res) {
      should.equal(res.status, 400, testBase.getStatusCodeMessage());
      should(res.body.message, '"The parameter \"Text\" should not be empty or null."');
      done();
    });
  });

  it('POST /Validar - Campo Sender com nome inválido', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Senderdddd": '11998880633',
      "Text": 'autorizar'
    })
    .end(function(err, res) {
      should.equal(res.status, 400, testBase.getStatusCodeMessage());
      should(res.body.message, '"The parameter \"Sender\" should not be empty or null."');
      done();
    });
  });

  it('POST /Validar - Campo Text com nome inválido', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "Sender": '11998880633',
      "Textddd": 'autorizar'
    })
    .end(function(err, res) {
      should.equal(res.status, 400, testBase.getStatusCodeMessage());
      should(res.body.message, '"The parameter \"Text\" should not be empty or null."');
      done();
    });
  });

  it('POST /Validar - Estrutura de encapsulamento infobip', function(done) {
    request(url)
    .post('/ShortMessage')
    .send({
      "data": {
        "record": [
          {
            "sender": '11998880633',
            "text": 'saldo'
          }
        ]
      }
    })
    .end(function(err, res) {
      should.equal(res.status, 200, testBase.getStatusCodeMessage());
      done();
    });
  });
});
