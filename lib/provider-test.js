/* global describe, it, beforeEach */
'use strict';

var expect = require('chai').expect;

function test(Provider) {
	describe('GitHubProvider', function() {
		var provider;
		var config = {
			auth: {
				type: 'basic',
				username: 'email@address.com',
				password: '12345678'
			},
			defaults: {
				createRepository: {
					private: false,
					issues: true,
					wiki: false
				}
			}
		};

		beforeEach(function() {
			provider = new Provider(config);
		});

		it('should create repositories', function(done) {
			provider.createRepository({ name: 'gitclick' })
			.then(function(repository) {
				expect(repository.name).to.equal('gitclick');

				done();
			}).catch(done);
		});

		it('should create public repositories', function(done) {
			provider.createRepository({ name: 'gitclick', private: false })
			.then(function(repository) {
				expect(repository.private).to.equal(false);

				done();
			}).catch(done);
		});

		it('should create private repositories', function(done) {
			provider.createRepository({ name: 'gitclick', private: true })
			.then(function(repository) {
				expect(repository.private).to.equal(true);

				done();
			}).catch(done);
		});

		it('should create repositories with issues', function(done) {
			provider.createRepository({ name: 'gitclick', issues: true })
			.then(function(repository) {
				expect(repository.issues).to.equal(true);

				done();
			}).catch(done);
		});

		it('should create repositories without issues', function(done) {
			provider.createRepository({ name: 'gitclick', issues: false })
			.then(function(repository) {
				expect(repository.issues).to.equal(false);

				done();
			}).catch(done);
		});

		it('should create repositories with wiki', function(done) {
			provider.createRepository({ name: 'gitclick', wiki: true })
			.then(function(repository) {
				expect(repository.wiki).to.equal(true);

				done();
			}).catch(done);
		});

		it('should create repositories without wiki', function(done) {
			provider.createRepository({ name: 'gitclick', wiki: false })
			.then(function(repository) {
				expect(repository.wiki).to.equal(false);

				done();
			}).catch(done);
		});
	});
}

module.exports = test;