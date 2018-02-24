'use strict';
const re = 'A[0-9a-zA-Z]{33}';

module.exports = opts => {
	opts = opts || {};
	return opts.exact ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g');
};