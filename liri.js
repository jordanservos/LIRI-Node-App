require("dotenv").config();
var fs = require("fs");
const keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var omdbKey = keys.omdb.api_key;

// add process.argv to capture input

let inputChoice = process.argv[2];
let inputTwo = process.argv[3];

for (var i = 4; i < process.argv.length; i++) {
    if (i > 3 && i < process.argv.length) {
        inputTwo += "+" + process.argv[i];
    } else {
        inputTwo += process.argv[i];
    }
}

// https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp

// https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp

// Create switch/case for each input action

// spotify
switch (inputChoice) {
    case "spotify-this-song":
        if (inputTwo) {
            searchSpotify(inputTwo);
        } else {
            searchSpotify("The Sign");
        }
        break;
    case "concert-this":
        bandsAPI();
        break;
    case "movie-this":
        omdbSearch();
        break;
    case "do-what-it-says":
        doThis();
        break;

    default:
        console.log("Please use one of these valid search terms - {concert-this}, {spotify-this-song}, {movie-this} or {do-what-it-says}");
}

// create spotify search function

function searchSpotify(song) {
    spotify.search({ type: "track", query: song, limit: 1 }, function(err, data) {
        if (err) {
            console.log("-----------------------");
            console.log("Artist: " + songData.artists[0].name);
            console.log("Song Title: " + songData.name);
            console.log("Preview Track: " + songData.preview_url);
            console.log("Album: " + songData.album.name);
            console.log("-----------------------");
            song();
        }

        for (var i = 0; i < data.tracks.items.length; i++) {
            var songData = data.tracks.items[i];
            console.log("-----------------------");
            console.log("Artist: " + songData.artists[0].name);
            console.log("Song Title: " + songData.name);
            console.log("Preview Track: " + songData.preview_url);
            console.log("Album: " + songData.album.name);
            console.log("-----------------------");
        }
    });
}

function bandsAPI() {
    if (!inputTwo) {
        inputTwo = "Guster";
    }
    axios
        .get(
            "https://rest.bandsintown.com/artists/" +
            inputTwo +
            "/events?app_id=codingbootcamp"
        )
        .then(function(response) {
            // console.log(response.data[0]);

            for (let i = 0; i < response.data.length; i++) {
                console.log("-----------------------");
                console.log("Venue: " + response.data[i].venue.name);
                console.log(
                    "Location: " +
                    response.data[i].venue.city +
                    ", " +
                    response.data[i].venue.country
                );
                console.log(
                    "Event Date: " + moment(response.data[i].datetime).format("L")
                );
            }
        });
};

function omdbSearch() {
    if (!inputTwo) {
        inputTwo = "Mr. Nobody";
        console.log("-----------------------");
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");

    }
    axios.get("http://www.omdbapi.com/?t=" + inputTwo + "&y=&plot=short&apikey=trilogy")
        .then(function(response) {
            console.log("-----------------------");
            console.log("Title: " + response.data.Title);
            console.log("Year Released: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomato Ratings: " + response.data.Ratings[1].Value);
            console.log("Country/Countries Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);
            console.log("-----------------------");



        });

};


function doThis() {
    fs.readFile("random.txt", "utf8", function(err, data) {

        if (err) {
            logThis(err);
        }
        var fileArray = data.split(",");
        // console.log(fileArray[1]);
        inputTwo = fileArray[1];
        // console.log(inputTwo);
        searchSpotify(inputTwo);


    })
};