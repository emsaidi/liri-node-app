var keys = require('./keys.js');

var Twitter = require('twitter');

var spotify = require('spotify');

var request = require('request');

var fs = require('fs');

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

//Function to pull tweets
function myTweets(){
  console.log("\nTHIS ARE MAH TWEETS!")
  console.log("--------------------\n")

  fs.appendFile('log.txt', "\n" + operand + "\nTHIS ARE MAH TWEETS!\n");
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0;i < tweets.length; i++){
      console.log(tweets[i].created_at + ": " +tweets[i].text);
      fs.appendFile('log.txt', tweets[i].created_at + ": " +tweets[i].text + "\n");
      }
    }else{
      console.log(error);
    }
  });
}

//Function to search any song
function spotifySearch(){
  fs.appendFile('log.txt', "\n" + operand + " " + searchTerm + "\n");
  spotify.search({ type: 'track', query: searchTerm}, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log("\nSPOTIFY MY SONG!\n")
    console.log("--------------------\n")
    console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
    console.log("Album: " + data.tracks.items[0].album.name);
    console.log("Song Name: " + data.tracks.items[0].name);
    console.log("Preview link to song: " + data.tracks.items[0].preview_url);

    fs.appendFile('log.txt', "\nSPOTIFY MY SONG!\n");
    fs.appendFile('log.txt', "--------------------\n");
    fs.appendFile('log.txt', "Artist(s): " + data.tracks.items[0].artists[0].name + "\n");
    fs.appendFile('log.txt', "Album: " + data.tracks.items[0].album.name + "\n");
    fs.appendFile('log.txt', "Song Name: " + data.tracks.items[0].name + "\n");
    fs.appendFile('log.txt', "Preview link to song: " + data.tracks.items[0].preview_url + "\n");
  });
}

//Function to search Spotify Song The Sing
function spotifyTheSign(){
  fs.appendFile('log.txt', "\n" + operand + "\n");
  spotify.lookup({ type: 'track', id: '0hrBpAOgrt8RXigk83LLNE' }, function(err, data){
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
      console.log("\nSPOTIFY MY SONG!\n")
      console.log("--------------------------\n")
      console.log("Artist(s): " + data.artists[0].name);
      console.log("Album: " + data.album.name);
      console.log("Song Name: " + data.name);
      console.log("Preview link to song: " + data.preview_url);

      fs.appendFile('log.txt', "\nSPOTIFY MY SONG!" + "\n");
      fs.appendFile('log.txt', "--------------------------\n");
      fs.appendFile('log.txt', "Artist(s): " + data.artists[0].name + "\n");
      fs.appendFile('log.txt', "Album: " + data.album.name + "\n");
      fs.appendFile('log.txt', "Song Name: " + data.name + "\n");
      fs.appendFile('log.txt', "Preview link to song: " + data.preview_url + "\n");
  });
}

//Function to search OMdb movie titles
function movieThisSearch(){
  fs.appendFile('log.txt', "\n" + operand + " " + searchTerm + "\n");
  var queryURL = 'http://www.omdbapi.com/?t=' + searchTerm + '&y=&plot=short&r=json';
  request(queryURL, function (error, response, body) {

    if (!error && response.statusCode == 200) {

      console.log("Title: " + JSON.parse(body)["Title"]);
      console.log("Year: " + JSON.parse(body)["Year"]);
      console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
      console.log("Country: " + JSON.parse(body)["Country"]);
      console.log("Language: " + JSON.parse(body)["Language"]);
      console.log("Plot: " + JSON.parse(body)["Plot"]);

      fs.appendFile('log.txt', "--------------------\n");
      fs.appendFile('log.txt', "Title: " + JSON.parse(body)["Title"] + "\n");
      fs.appendFile('log.txt', "Year: " + JSON.parse(body)["Year"] + "\n");
      fs.appendFile('log.txt', "IMDB Rating: " + JSON.parse(body)["imdbRating"] + "\n");
      fs.appendFile('log.txt', "Country: " + JSON.parse(body)["Country"] + "\n");
      fs.appendFile('log.txt', "Language: " + JSON.parse(body)["Language"] + "\n");
      fs.appendFile('log.txt', "Plot: " + JSON.parse(body)["Plot"] + "\n");
    }
});
}

//Function to serch OMdb for Mr. Nobody
function movieThis(){
  fs.appendFile('log.txt', "\n" + operand + "\n");
  var queryURL = 'http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&r=json';
  request(queryURL, function (error, response, body) {

    if (!error && response.statusCode == 200) {

      console.log("Title: " + JSON.parse(body)["Title"]);
      console.log("Year: " + JSON.parse(body)["Year"]);
      console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
      console.log("Country: " + JSON.parse(body)["Country"]);
      console.log("Language: " + JSON.parse(body)["Language"]);
      console.log("Plot: " + JSON.parse(body)["Plot"]);

      fs.appendFile('log.txt', "--------------------\n");
      fs.appendFile('log.txt', "Title: " + JSON.parse(body)["Title"] + "\n");
      fs.appendFile('log.txt', "Year: " + JSON.parse(body)["Year"] + "\n");
      fs.appendFile('log.txt', "IMDB Rating: " + JSON.parse(body)["imdbRating"] + "\n");
      fs.appendFile('log.txt', "Country: " + JSON.parse(body)["Country"] + "\n");
      fs.appendFile('log.txt', "Language: " + JSON.parse(body)["Language"] + "\n");
      fs.appendFile('log.txt', "Plot: " + JSON.parse(body)["Plot"] + "\n");
    }
  });
}

//Twitter Request
if (operand == "my-tweets"){
  myTweets();
}

//Spotify Request
if (operand == "spotify-this-song" && searchTerm){
  spotifySearch();
}else if(operand == "spotify-this-song"){
  spotifyTheSign();
}

//OMdb Search
if (operand == "movie-this" && searchTerm){
  movieThisSearch();
}else if(operand == "movie-this"){
  movieThis();
}

//FS ReadyFile request
if (operand == "do-what-it-says"){
  fs.readFile('random.txt', "utf8", function(err, data){
    data = data.split(',');
    operand = data[0];
    searchTerm = data[1];

    if (operand == "my-tweets"){
      myTweets();
    }
    else if (operand == "spotify-this-song" && searchTerm){
      spotifySearch();
    }
    else if(operand == "spotify-this-song"){
      spotifyTheSign();
    }
    else if (operand == "movie-this" && searchTerm){
      movieThisSearch();
    }
    else if(operand == "movie-this"){
      movieThis();
    }
  });
}
