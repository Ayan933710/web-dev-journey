const express = require("express");
const app = express();

// path is a built-in module in nodejs

const path = require("path");

const port = 8080;

// no need to require ejs, express will do it for us internally

app.set("view engine", "ejs");

// __dirname is a global variable in nodejs which gives us the absolute path of the current directory. It is used so that we can access views folder from parent folder backend itself since without this express looks for views in backend folder and is unable to find it.

app.set("views", path.join(__dirname, "./views"));

// we use this to serve long css, js files from public folder instead of writing them in ejs file itself.
// can also write as app.use(express.static("public")); but it will not work if runned from parent directory.

app.use(express.static(path.join(__dirname, "./public")));

// this is used to serve static files like css, js, images etc. from the public folder

app.get("/", (req, res) => {
  res.render("home.ejs");
});

// creating a route for the /rolldice endpoint which will render the rolldice.ejs file when accessed

app.get("/rolldice", (req, res) => {
  let diceval = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceval });
});

// creating an instagram template route which will render the instagram.ejs file when accessed with a username parameter in the url.

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

// it listens on the specified port and executes the callback function when the server is successfully started

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
