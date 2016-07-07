// Problem: We need a simple way to look at the current weather report
// Solution: Use Node.js to connect to openweathermap.org's API to get weather
//           information to print out

// API key is required for openweathermap's API
// API key is located in config.json file
var json = require('./config.json');
var apikey = json.apikey;
var http = require("http");

function getWeather(zipcode) {
  // Connect to API url (http://api.openweathermap.org/data/2.5/weather?zip=90210,us&appid=1111111)
  var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode +
            ',us&appid=' + apikey;
  var request = http.get(url, function(response) {
    var body = "";

    // Read the weather data
    // This function ensures that all weather data is collected before parsing
    response.on('data', function(chunk) {
      body += chunk;
    });

    // Print out json object once finished capturing weather data
    response.on('end', function() {
      var weather = JSON.parse(body);
      console.dir(weather);
    });

  });
  console.log(zipcode);
}

module.exports.get = getWeather;
