var keys = require('./keys.js');
var consumerKey = (keys.twitterKeys.consumer_key);
var consumerSecret = (keys.twitterKeys.consumer_secret);
var accessTokenKey = (keys.twitterKeys.access_token_key);
var accessTokenSecret = (keys.twitterKeys.access_token_secret);
//console.log(consumerKey + '' + consumerSecret + '' + accessTokenKey + '' + accessTokenSecret);

var firstInput = process.argv[2];
var secondInput = process.argv[3];


//Twitter - node liri.js my-tweets
// https://dev.twitter.com/rest/reference/get/statuses/user_timeline &&
// https://www.npmjs.com/package/twitter

var Twitter = require('twitter');
if (firstInput === 'my-tweets') {
    var client = new Twitter({
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
        access_token_key: accessTokenKey,
        access_token_secret: accessTokenSecret
});
    client.get('statuses/user_timeline', {screen_name: 'bollocksm8', count: 3, contributor_details: false, include_rts: false, exclude_replies: true}, function(error, tweets, response) {
        console.log(tweets);
    });
}

//Spotify  - node liri.js spotify-this-song 'song name here'
// https://www.npmjs.com/package/spotify

var spotify = require('spotify');
if (firstInput === 'spotify-this-song'){
    spotify.search({type: 'track', query: secondInput}, function(err, data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    }
    else {
    console.log("Artist: " + data.tracks.items[0].artists[0].name);
    console.log("Song: " + data.tracks.items[0].name);
    console.log("Preview Link: " + data.tracks.items[0].preview_url);
    console.log("Album: " + data.tracks.items[0].album.name);
    }
});
}

// OMDB -- node liri.js movie-this 'movie name here'
var request = require('request');
    if (firstInput === 'movie-this') {
        request("http://www.omdbapi.com/?t=" + secondInput, function(error, response, body) {
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Rating: " + JSON.parse(body).imdbRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Language: " + JSON.parse(body).Language);
        })
};
