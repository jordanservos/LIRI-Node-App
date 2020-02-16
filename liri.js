const dotenv = require("dotenv").config();
var Spotify = require('node-spotify-api');
const keys = require("./keys.js");
var request = require('request');
var fs = require('fs');
var axios = require("axios");

var spotify = new Spotify(keys.spotify);


var omdbKey = keys.omdb.api_key;

// add process.argv to capture input 

const inputOne = process.argv[2];
const inputTwo = process.argv[3];


switch (inputOne) {
    case ('spotify-this-song'):
        if (inputTwo) {
            searchSpotify(inputTwo);
        } else {
            searchSpotify("The Sign");
        }
        break;
    default:
        console.log("Try searching again");
};


function searchSpotify(song) {

    spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
        if (err) {
            SongName = "";
            console.log("Artist: " + songData.artists[0].name);
            console.log("Song Title: " + songData.name);
            console.log("Preview Track: " + songData.preview_url);
            console.log("Album: " + songData.album.name);
            song();
        }

        for (var i = 0; i < data.tracks.items.length; i++) {
            var songData = data.tracks.items[i];
            console.log("Artist: " + songData.artists[0].name);
            console.log("Song Title: " + songData.name);
            console.log("Preview Track: " + songData.preview_url);
            console.log("Album: " + songData.album.name);
        }
    });

}