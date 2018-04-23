import { now } from 'lodash';

export const updateArray = (arr, name='John') => {
	return arr.map((name) => `Yo, ${name}`);
}