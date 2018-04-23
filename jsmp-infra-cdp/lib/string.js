'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var updateString = exports.updateString = function updateString(string, separator) {
	return string.split(',').join(separator);
};