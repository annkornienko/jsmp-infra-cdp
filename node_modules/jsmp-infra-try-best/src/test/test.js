import assert from 'assert';
import {isArray, isString, isNull} from 'lodash';



import {
	sampleDataForArray,
	sampleDataForString
} from './test-data';

import {
    updateArray,
    updateString,
} from '../index.js';


describe('Great every person', () => {
    it('Returns great for every person', () => {
        const result = updateArray(['John']);
        const expectedResult = ['Yo, John'];

        assert.deepEqual(result, expectedResult);
    });
});

describe('Separate string', () => {
    it('Returns separated string by special sign', () => {
        const result = updateString('fix,modify', '|');
        const expectedResult = 'fix|modify';

        assert.deepEqual(result, expectedResult);
    });
});

describe('Check if separator exist', () => {
    it('Returns separator', () => {
        const separator = '/'

        assert.equal(isNull(separator), false);
    });
});

describe('Check if pass array', () => {
    it('Rpass array', () => {
        assert.equal(isArray(['John']), true);
    });
});

describe('Check if pass string', () => {
    it('pass string', () => {
        assert.equal(isString('fix|modify'), true);
    });
});


