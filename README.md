# basic-instagram-client
[![Build Status](https://travis-ci.org/gjlaubenstein/basic-instagram-client.svg?branch=master)](https://travis-ci.org/gjlaubenstein/basic-instagram-client)
[![Coverage Status](https://coveralls.io/repos/gjlaubenstein/basic-instagram-client/badge.svg?branch=master&service=github)](https://coveralls.io/github/gjlaubenstein/basic-instagram-client?branch=master)

## Install
`npm install --save basic-instagram-client`

## Usage
```
var Instagram = require('basic-instagram-client');

var client_key = process.env.INSTAGRAM_CLIENT_KEY;

instagram = new Instagram({
		'client_key': client_key
});

var userId;
instagram.getUserId('aUserName').then((id) => {
		userId = id;
});

var numPostsToGet = 10;
instagram.getUserPosts(userId, numPostsToGet).then((posts) => {
  console.log(posts);
});

instagram.getTagPosts('aTag', numPostsToGet).then((posts) => {
  console.log(posts);
});

```
