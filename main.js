'use strict';

const winston = require('./logs/base');
const file = require('./filesUtil');
let request = require('./requests');

const suite = file.loadJson('./test.json');
const config = suite.Config;


const test = suite.test[2];
// for (var test in suite.test){
// 	console.log(suite.test);
// };
//utils.makeCall();

request.makeCall(config , test ).then ( res => console.log(res));