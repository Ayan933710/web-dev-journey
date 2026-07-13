const express = require("express");
const app = express();
const port = 8080;

// writing this so that while getting req.body server can understand the response and print the data

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sending a get request

app.get("/register", (req, res) => {
  let { user, password } = req.query;
  res.send(`standard get response. Welcome ${user}`);
});

// sending a post request. Used to send some data along with request.
// using req.body to get the data send during the request

app.post("/register", (req, res) => {
  let { user, password } = req.body;
  res.send(`standard post response. Welcome ${user}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
