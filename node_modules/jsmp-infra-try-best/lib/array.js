'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.updateArray = undefined;

var _lodash = require('lodash');

var updateArray = exports.updateArray = function updateArray(arr) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'John';

	return arr.map(function (name) {
		return 'Yo, ' + name;
	});
};