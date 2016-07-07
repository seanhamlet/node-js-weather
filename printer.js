// Print current weather report
function printMessage(location, main, temperature) {
  var message = "Location: " + location + "\nCurrent Weather: " + main + "\nCurrent Temperature: " + temperature + " Kelvin";
  console.log(message);
}

//Print out error messages
function printError(error) {
  console.error(error.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;
