
// import library by require()
// creating a obj to make requests using its methods
const axios = require('axios');

// api url youre getting the data from
const weather_URL = "https://api.open-meteo.com/v1/forecast?latitude=45.4235&longitude=-75.6979&hourly=temperature_2m&current_weather=true";

// get data from url -> this function is asynchronous
axios.get(weather_URL)
  // bc this function is async, .then allows the following code to be executed once we get the response and promise is fulfilled
  .then((response) => {
    // extract current temperature only  and log to the console
    const current_temp = 
response.data.current_weather.temperature;
    console.log(`the current temperature is ${current_temp} degrees celcius`);
  })
  // in case of an error, print the error message
  .catch(function(error){
    console.log(error.message);
  });

// creating varaible for database/server url to post/add data to
const server_URL = "https://jamhacks-test-server.lamona.repl.co/change_data"

// request to send message
// the second parameter is a json (key value pair)
axios.post(server_URL, {message: "lalalallalal"})
  // after done, then print out the response 'OK' if it works
  .then(function(response){
    console.log(response.data) // 'OK'
    // if not print the error message
  })
  .catch(function (error){
    console.log(error.message);
  });

// my server that we are sending post requests to 
const my_URL = 'https://backend-jam.yuteresa.repl.co/square'

// requesting to give number and return the square aka 3^2 = 9
axios.post(my_URL, {number:3})
  .then(function(response){
    console.log(response.data.number)
  })
  .catch(function (error){
    console.log(error.message)
  })