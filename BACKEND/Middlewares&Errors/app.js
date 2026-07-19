const express = require("express");
const app = express();

// middleware can only work for two tasks : either sending a response or calling the next function to work
// if a response is send through a middleware it breaks the normal connectivity of request and response and hence all other routes/functions doesnt work as middleware breaks it by sending a response itself
// middleware always work even if the request sent is wrong
// if no route is given to middleware then it will work for all routes but if given it will specifically work for that route only
// always write middleware at starting before any route
// code written after next() can also run

/*
// sending response through middleware
app.use((req,res) => {
    console.log("Hii, I am Middleware"); 
    res.send("middleware finished");
});

// calling next function through middleware
app.use((req,res, next) => {
    console.log("Hii, I am 1st Middleware"); 
    next();
});

app.use((req,res, next) => {
    console.log("Hii, I am 2nd Middleware"); 
    next();
});

// middleware for a particular route
app.use("/random", (req,res, next) => {
    console.log("Hii, I am only Middleware for random"); 
    next();
});
*/
// utility middleware (logger-morgan)
app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});

// a middleware such that to prevent users from entering unauthorized pages of website
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
  // sending middleware as a function parameter
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/random", (req, res) => {
  res.send("This is a random page");
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
