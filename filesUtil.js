'use strict';

const fs = require('fs');
const winston = require('./logs/base');

/* ******************** file util Methods ******************************** */

/**
 * loads the data from a json file
 * @param {String} location The relative or absolute address for the json file containing the suite.
 * @return {Object} return the json object of the suite
 */
function loadJson(location) {
const suite = JSON.parse(fs.readFileSync(location, 'utf8'));
    //winston.info('loading the suite into the program :',suite);
    //winston.info(suite);
    return suite;
}

module.exports = {
	loadJson,
};