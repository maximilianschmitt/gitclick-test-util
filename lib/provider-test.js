/* global describe, it, beforeEach */
'use strict';

var chai = require('chai');
var expect = chai.expect;

chai.use(require('chai-as-promised'));

function test(providerName, provider) {
  describe(providerName, function() {
    var auth = {
      type: 'basic',
      username: 'email@address.com',
      password: '12345678'
    };

    it('should create repositories', function() {
      return expect(provider.createRepository({ name: 'gitclick' }, auth))
        .to.eventually.have.property('name', 'gitclick');
    });

    it('should create public repositories', function() {
      return expect(provider.createRepository({ name: 'gitclick', private: false }, auth))
        .to.eventually.have.property('private', false);
    });

    it('should create private repositories', function() {
      return expect(provider.createRepository({ name: 'gitclick', private: true }, auth))
        .to.eventually.have.property('private', true);
    });

    it('should create repositories with issues', function() {
      return expect(provider.createRepository({ name: 'gitclick', issues: true }, auth))
        .to.eventually.have.property('issues', true);
    });

    it('should create repositories without issues', function() {
      return expect(provider.createRepository({ name: 'gitclick', issues: false }, auth))
        .to.eventually.have.property('issues', false);
    });

    it('should create repositories with wiki', function() {
      return expect(provider.createRepository({ name: 'gitclick', wiki: true }, auth))
        .to.eventually.have.property('wiki', true);
    });

    it('should create repositories without wiki', function() {
      return expect(provider.createRepository({ name: 'gitclick', wiki: false }, auth))
        .to.eventually.have.property('wiki', false);
    });
  });
}

module.exports = test;
