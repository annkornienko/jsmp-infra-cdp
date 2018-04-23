'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _lodash = require('lodash');

var _testData = require('./test-data');

var _index = require('../index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Great every person', function () {
    it('Returns great for every person', function () {
        var result = (0, _index.updateArray)(['John']);
        var expectedResult = ['Yo, John'];

        _assert2.default.deepEqual(result, expectedResult);
    });
});

describe('Separate string', function () {
    it('Returns separated string by special sign', function () {
        var result = (0, _index.updateString)('fix,modify', '|');
        var expectedResult = 'fix|modify';

        _assert2.default.deepEqual(result, expectedResult);
    });
});

describe('Check if separator exist', function () {
    it('Returns separator', function () {
        var separator = '/';

        _assert2.default.equal((0, _lodash.isNull)(separator), false);
    });
});

describe('Check if pass array', function () {
    it('Rpass array', function () {
        _assert2.default.equal((0, _lodash.isArray)(['John']), true);
    });
});

describe('Check if pass string', function () {
    it('pass string', function () {
        _assert2.default.equal((0, _lodash.isString)('fix|modify'), true);
    });
});