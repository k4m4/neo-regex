'use strict';
const re = 'A[0-9a-zA-Z]{33}';

module.exports = options => {
	options = options || {};
	return options.exact ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g');
};
