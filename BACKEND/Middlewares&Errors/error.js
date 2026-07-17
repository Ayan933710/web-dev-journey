const express = require("express");
const app = express();
const ExpressError = require("./ExpressError"); // handling error by creating a error class and with our custom messages

// express has its own default error handling middleware

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/random", (req, res) => {
  res.send("This is a random page");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is Forbidden");
});

// Error handling Middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some error occurred" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
