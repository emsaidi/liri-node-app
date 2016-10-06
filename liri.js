var keys = require('./keys.js');

var Twitter = require('twitter');

var spotify = require('spotify');

var request = require('request');

var operand = process.argv[2];

var searchTerm = process.argv[3];
 
 //Twitter Keys
var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});
 
 //Twitter Request
var params = {
	screen_name: 'pixeltastic',
	count: 35,
	exclude_replies: true,
};

if (operand == "my-tweets"){
  console.log("\nTHIS ARE MAH TWEETS!")
  console.log("--------------------\n")
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0;i < tweets.length; i++){
      console.log(tweets[i].created_at + ": " +tweets[i].text);
      }
    }else{
      console.log(error);
    }
  });
}

//Spotify Request
if (operand == "spotify-this-song" && searchTerm){
  spotify.search({ type: 'track', query: searchTerm}, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
      console.log("\nSPOTIFY MY SONG!")
      console.log("--------------------\n")
      console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
      console.log("Album: " + data.tracks.items[0].album.name);
      console.log("Song Name: " + data.tracks.items[0].name);
      console.log("Preview link to song: " + data.tracks.items[0].preview_url);

  });
}else if(operand == "spotify-this-song"){
  spotify.lookup({ type: 'track', id: '0hrBpAOgrt8RXigk83LLNE' }, function(err, data){
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
      console.log("\nSPOTIFY MY SONG!")
      console.log("--------------------\n")
      console.log("Artist(s): " + data.artists[0].name);
      console.log("Album: " + data.album.name);
      console.log("Song Name: " + data.name);
      console.log("Preview link to song: " + data.preview_url);

  });
}

// //Request request
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
//   }
// })