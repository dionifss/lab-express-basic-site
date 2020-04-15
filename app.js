// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

app.use(express.static("public"));

// our first Route:
// app.get("/", (request, response, next) => {
//   response.send("<h1>Welcome Ironhacker. :)</h1>");
// });

// Server Started
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/markus", (request, response, next) => {
  response.sendFile(__dirname + "/views/markus-about.html");
});

app.get("/markusworks", (request, response, next) => {
  response.sendFile(__dirname + "/views/terrible-chess-works.html");
});
