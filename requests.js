'use strict';

const request = require('request-promise-native');

function makeCall (config , test){
	const options = {
    	method: test.call,
    	uri: config.Host + test.path,
    	headers :test.headers,
    	json: true
	};
	
	return request(options).then(res => res);
};
// exports the variables and functions above so that other modules can use them
module.exports.makeCall = makeCall;
