const express = require("express"); // Import the Express library

const app = express(); // Create an instance/object of the Express application

let port = 3000; // Define the port number on which the server will listen for incoming requests

// Start the server and listen on the specified port

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
/*
// Middleware to handle incoming requests

// This middleware function will be executed for every incoming request to the server

app.use((req, res) => {
  console.log("Received a request"); // Log a message when a request is received
  //res.send("Hello, World!"); // Send a response to the client

  let code = "<h1>Fruits</h1><ul><li>Orange</li><li>Mango</li></ul>"; // Define an HTML string to be sent as a response
  res.send(code);
});
*/
// Define routes to handle specific paths and HTTP methods

app.get("/", (req, res) => {
  res.send("You contacted root path");
});

app.get("/home", (req, res) => {
  res.send("You contacted home path");
});

app.get("/help", (req, res) => {
  res.send("You contacted help path");
});
/*
// this is a wildcard route that will match any path that has not been defined above

app.get("*splat", (req, res) => {
  res.send("This path does not exist or not defined");
});
*/
app.post("/", (req, res) => {
  res.send("You sent a post request to the root path");
});

// Route with parameters

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`You contacted the path with username: ${username} and id: ${id}`);
});

// Route with query parameters

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("<h1>Nothing Searched</h1>");
  }
  res.send(`You searched for: ${q}`);
});
