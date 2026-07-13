const express = require("express");
const app = express();
const port = 8080;

const path = require("path");

const { v4: uuidv4 } = require("uuid"); // requiring uuid package for generating unique ids

const methodOverride = require("method-override"); // requiring the method-override package so that different requests can be used in html form other than get or post
app.use(methodOverride("_method")); // to check availability of _method function and replace request as required

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./public")));

// creating an array of posts to use as a database
let posts = [
  {
    id: uuidv4(), // getting random ids
    username: "narayan",
    content: "I love coding.",
  },
  {
    id: uuidv4(),
    username: "ayan",
    content: "I got my first internship",
  },
  {
    id: uuidv4(),
    username: "raja",
    content: "I won a hackathon",
  },
];

// path to get the all the posts view by rendering the html template in index.ejs and sending array of posts while rendering
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

// path to take input for new post
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

// post path to make changes in posts array
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts"); // it redirects the page to new url
});

// sending get request to show user post in detail
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

// sending get request to get new content to update in post through a form
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

// sending patch request to update post content after getting newcontent from get request
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  let newContent = req.body.content;
  post.content = newContent;
  res.redirect("/posts");
});

// sending delete request to remove a post from page
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
