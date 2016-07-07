var weather = require("./weather");

var zipcodes = process.argv.slice(2);
zipcodes.forEach(weather.get);
