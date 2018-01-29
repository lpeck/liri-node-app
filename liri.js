const keys = require("./keys");
console.log(keys);



if (process.argv[2] === 'my-tweets') {
	console.log('twitterstuff');
	var params = {screen_name: 'nodejs'};
	twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
    	console.log(tweets);
 	}
});

} else if (process.argv[2] === 'spotify-this-song') {
	console.log('spotify stuff;');
	var Spotify = require('node-spotify-api');

	var spotify = new Spotify({
  		id: '07b7111bf915495bbaa01ca0c0479923',
  		secret: '217879005aed4572a3fa7b23377aa415',
});

spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data);
});
} else if (process.argv[2] === 'movie-this') {
	console.log('movie stuff')

} else if (process.argv[2] === 'do-what-it-says') {
	console.log('doit')

}
