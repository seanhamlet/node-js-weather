// Problem: We need a simple way to look at the current weather report
// Solution: Use Node.js to connect to openweathermap.org's API to get weather
//           information to print out

// API key is required for openweathermap's API
// API key is located in config.json file
var json = require('./config.json');
var apikey = json.apikey;

var http = require("http");
var printer = require("./printer");

function getWeather(zipcode) {
  // Connect to API url (http://api.openweathermap.org/data/2.5/weather?zip=90210,us&appid=1111111)
  var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode +
            ',us&appid=' + apikey;

  var request = http.get(url, function(response) {
    var body = "";
    if (response.statusCode === 401){
      console.log('Problem with request. Wrong URL or invalid API key.');
    }

    // Read the weather data
    // This function ensures that all weather data is collected before parsing
    response.on('data', function(chunk) {
      body += chunk;
    });

    // Print out json object once finished capturing weather data
    response.on('end', function() {
      try {
      // Parse the data
      var weather = JSON.parse(body);
      //Print the data
      printer.printMessage(weather.name, weather.weather[0].main, weather.main.temp);
    } catch(error) {
      // Parse error
      console.log("There was an error parsing the data")
    }
    });

    // Connection error
    response.on('error', function(error) {
      printer.printError({message: "There was an error with the connection. (" + error.message + ")"});
    });

  });
  console.log(zipcode);
}

module.exports.getWeather = getWeather;
