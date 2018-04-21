'use strict';
var cronos;
var tiempo;

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function() {
    return true;
};

module.exports.init = function() {
	cronos = setInterval(function() { 
		tiempo = parseInt(document.getElementById('time').value);
		document.getElementById('time').value = eval(tiempo + 1);
	}, 1000);
	return true;
}

module.exports.reset = function() {
	tiempo = parseInt(document.getElementById('time').value);
	document.getElementById('time').value = "0";
	return true;
}

module.exports.stop = function() {
	clearInterval(cronos);
	return true;
}

