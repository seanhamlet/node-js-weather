var weather = require("./weather");

var zipcodes = process.argv.slice(2);
zipcodes.forEach(weather.getWeather);

// Idea:
// Have user give zipcode for location
// as well as 'current', '5-day', 'weekend', or some other string.
// also have them give units of temperature
