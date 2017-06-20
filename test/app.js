'use strict';

describe('application', function() {
	it('should intentionally fail', function(done) {
		throw new Error('this is a failure');
	});
});