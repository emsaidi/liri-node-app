var keys = require('./keys.js');

var Twitter = require('twitter');

var spotify = require('spotify');

var request = require('request');
 
 //Twitter Keys
var client = new Twitter({
  consumer_key: 'keys.twitterKeys.consumer_key',
  consumer_secret: 'keys.twitterKeys.consumer_secret',
  access_token_key: 'keys.twitterKeys.access_token_key',
  access_token_secret: 'keys.twitterKeys.access_token_key'
});
 
 //Twitter Request
var params = {
	screen_name: 'pixeltastic',
	count: 20,
	exclude_replies: true,
	contributor_details: true
};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    console.log(response);
  }
});

// //Spotify Request
// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
 
//     // Do something with 'data' 
// });

// //Request request
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
//   }
// })