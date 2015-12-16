var chai = require('chai'),
	expect = chai.expect,
	assert = chai.assert,
	mocha = require('mocha'),
	Instagram = require('../instagram.js');

var client_key = process.env.INSTAGRAM_CONSUMER_KEY;

describe("Instagram Client", function () {
	var instagram;
	before(() => {
		instagram = new Instagram({
			'client_key': client_key
		});
	});

	describe("instanciating an instagram client", () => {
		it("should return an instance of Instagram", () => {
			expect(instagram).to.be.an.instanceOf(Instagram);
		});
	})

	describe("getting user id", () => {
		var user;
		before(() => {
			user = {
				username: "gjl_niu",
				id: "1577045279"
			};
		});

		it("should return a user id", (done) => {
			instagram.getUserId(user.username).then((id) => {
				assert.equal(id, user.id);
				done();
			})
		});
	});

	describe("get posts by user", () => {
		var user = {
			id: "1577045279"
		};
		var numOfPosts = 4;
		it("should get the users posts", (done) => {
			instagram.getUserPosts(user.id, numOfPosts).then((posts) => {
				assert.equal(posts.length, numOfPosts);
				done();
			});
		});
	});
	
	describe("get posts by tag", () => {
		var tag = "NIU";
		var numOfPosts = 5;
		it("should return posts that contain the hashtag", (done) => {
			instagram.getTagPosts(tag, numOfPosts).then((posts) => {
				assert.equal(posts.length, numOfPosts);
				posts.forEach((post) => {
					var found = post.tags.filter((t) => {
						return t.toLowerCase() == tag.toLowerCase();
					});
					assert(found.length >= 0);
				});
				done();
			});
		});
	});
});