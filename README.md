# LIRI-Node-App

## Overview

For this assignment I made LIRI! LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

LIRI uses `.gitignore`which stores API keys locally and keeps them safe through abstraction by `.env`. Users can utilize this app y simply using their own API keys. 

## How LIRI Works

LIRI will respond to any of the following commands:
![commands](https://github.com/jordanservos/LIRI-Node-App/blob/master/Screenshots/commands.png)

* **node liri.js concert-this <artist/band name here>** - This will search the Bands in Town Artist Events AP:
![concert](https://github.com/jordanservos/LIRI-Node-App/blob/master/Screenshots/concert.png)
* **node liri.js spotify-this-song <song name here>** - This will show the information about the song using the Spotify API:
![spotify](https://github.com/jordanservos/LIRI-Node-App/blob/master/Screenshots/spotify.png)
* **node liri.js movie-this <movie name here>** - This will output the following movie information to your terminal/bash window:
![movie](https://github.com/jordanservos/LIRI-Node-App/blob/master/Screenshots/movie.png)
* **node liri.js do-what-it-says** - Using the fs Node package, LIRI will take the text inside of a random.txt file and then use it to call the Spotify command.
![do this](https://github.com/jordanservos/LIRI-Node-App/blob/master/Screenshots/do%20what%20it%20says.png)

## Technologies Used 

* [Node.js] (https://nodejs.org/en/)
* [Node-File-System] (https://nodejs.org/api/fs.html)
* [Axios] (https://www.npmjs.com/package/axios)
* [DotEnv] (https://www.npmjs.com/package/dotenv)
* [JavaScript] (https://www.javascript.com/)
* [Moment.js] (https://www.npmjs.com/package/moment)
* [OMDB-API] (http://www.omdbapi.com)
* [Bandsintown-API] (http://www.artists.bandsintown.com/bandsintown-api)
* [Node-Spotify-API] (https://www.npmjs.com/package/node-spotify-api)

## Developer - Jordan Servos





