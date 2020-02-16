const dotenv = require("dotenv").config();
var Spotify = require('node-spotify-api');
const keys = require("./keys.js");
var request = require('request');
var fs = require('fs');

var spotify = new Spotify(keys.spotify);
var omdbKey = keys.omdb.api_key;