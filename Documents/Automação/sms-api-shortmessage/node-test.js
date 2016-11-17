process.env.NODE_ENV = 'qa';

var env = process.env.NODE_ENV;

var user = require('./data/user.json');

switch (process.env.NODE_ENV) {
  case 'qa':
    user = user.qa;
    break;
  case 'sandbox':
    user = user.sandbox;
    break;
  case 'prod':
    user = user.prod;
    break;
}

console.log(process.env.NODE_ENV);
console.log(user);
