// importing express (create our server) and body parser (get data from incoming requests) 
const express = require('express')
//  https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express -> you dont necessarily need this anymore
const bodyParser = require('body-parser')

// creating app 
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// creating routes (slashes after website name)


// eg https://replit.com/@yut-code/[backend-jam#index.js] 
// when our app recieves a get request, from website.com/ 
// other parameter (request, response)
// since it is a get req, you can only send responses as a server
app.get("/", (req, res) => {
  // sending back Hi
  res.send("<h1>Hi</h1>")
})

// when our app recieves a post request, we as the server recieve the information 
// post request to replit.com/user/square cuz our app is going to square a number
app.post('/square', (req, res) => {
  // we are recieving a key value pair from the BODY of the file (think of the html file, there is a header and body, the information is in the body)
  let number = req.body.number;
  // number squared
  number = number ** 2
   // add squared number to json database
  res.send({number: number})
  // {number: 5}
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})