'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Devices Controller', function() {
	it('should not have any devices if none have been loaded', function(done) {
		chai
			.request(app)
			.get('/devices')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.eql(0);
				done();
			})
	});
});