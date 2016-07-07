## node-js-weather
Command line weather app using Node.js and [OpenWeatherMap](http://openweathermap.org/).

This library provides an interface to query the current weather and temperature using a zipcode location and the OpenWeatherMap [API](http://openweathermap.org/current).

I am not affilated with nor have a formal relationship with [OpenWeatherMap](http://openweathermap.org/).

### Using node-js-weather

Example query: `node app.js F 90210` 

In the above example, `F` is the desired temperature units and `90210` is the desired location as a US zipcode.

Example output:  
```javascript
Location: Beverly Hills    
Current Weather: Mist  
Current Temperature: 64°F
```

### Getting started

1. The OpenWeatherMap API requires an API key. If not done already, please [sign up](https://home.openweathermap.org/users/sign_up) to request a free API key.
2. Install Node.js
3. Download the repository
4. Create config.json file that contains your API key formatted as such:  
`{ "apikey": "111111111111" }`
5. Run the above example query. Please feel free to change the temperature units to celsius 'C' and the zipcode to any US zipcode.  
Note: node-js-weather can handle multiple zipcodes for a single query (i.e. this is a valid query: `node app.js F 90210 20001 10001`).
