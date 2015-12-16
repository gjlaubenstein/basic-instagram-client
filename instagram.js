'use strict';

var Q = require('q');
var util = require('util');
var restify = require('restify');

class Instagram {
	constructor(credentials) {
		this.client_key = credentials.client_key;

		this.client = restify.createStringClient({
			url: 'https://api.instagram.com'
		});

	}

	getUserId(username) {
		var deferred = Q.defer();
		this.client.get(util.format('/v1/users/search?q=%s&client_id=%s', username, this.client_key), (err, req, res, data) => {
			var results = JSON.parse(res.body);
			var user = results.data.filter((u) => {
				return u.username == username;
			});
			deferred.resolve(user[0].id);
		});
		return deferred.promise;
	}

	getUserPosts(id, count) {
		var deferred = Q.defer();
		this.client.get(util.format('/v1/users/%s/media/recent?client_id=%s&count=%s', id, this.client_key, count), (err, req, res, data) => {
			var results = JSON.parse(res.body);
			deferred.resolve(results.data);
		});
		return deferred.promise;
	}

	getTagPosts(tag, count) {
		var deferred = Q.defer();
		this.client.get(util.format('/v1/tags/%s/media/recent?client_id=%s&count=%s', tag, this.client_key, count), (err, req, res, data) => {
			var results = JSON.parse(res.body);
			deferred.resolve(results.data);
		});
		return deferred.promise;
	}
	
}

module.exports = Instagram;