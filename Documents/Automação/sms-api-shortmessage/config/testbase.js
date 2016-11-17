//set node environment
process.env.NODE_ENV = 'qa';

var config = require("./env.json");

module.exports = {

    getBaseUrl: function() {
        var baseUrl = config[process.env.NODE_ENV];
        return baseUrl;
    },

    getUrl: function() {
        process.env.NODE_ENV = 'qa';
        var baseUrl = config[process.env.NODE_ENV];
        return baseUrl;
    },

    waitForLoad: function() {
        return 3000;
    },

    getStatusCodeMessage: function() {
      return 'erro ao validar statuscode da api';
    }
};
