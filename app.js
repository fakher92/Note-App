console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Fakher'));
var filteredArray = _.uniq(['Andrew', 1, 'Fakher', 1, 2, 3, 4]);
console.log(filteredArray);

//console.log('Result:', notes.add(9, -2));

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
