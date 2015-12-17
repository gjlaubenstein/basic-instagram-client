# basic-instagram-client

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
