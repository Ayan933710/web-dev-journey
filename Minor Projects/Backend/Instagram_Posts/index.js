const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

const { v4: uuidv4 } = require("uuid");

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./public")));

let posts = [
  {
    id: uuidv4(),
    username: "ayan",
    photo:
      "https://wallartprints-bt.myshopify.com/cdn/shop/files/snake-river-nature-pictures-77233931.jpg",
    content: "My first post.",
  },
  {
    id: uuidv4(),
    username: "raja",
    photo:
      "https://www.whoa.in/download/nature-images-nature-photos-nature-wallpapers-beautiful-nature-images-3d-wallpapers-mobile-wallpaper",
    content: "Hello guys.",
  },
  {
    id: uuidv4(),
    username: "aryan",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EJ6T-z52YtjF1mWF0P68mYmqK6N2YRG8HKwddmrp6Mevb2G3G3Bg-56B&s=10",
    content: "Going out.",
  },
];

app.get("/ig/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/ig/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/ig/posts", (req, res) => {
  let { username, photo, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, photo, content });
  res.redirect("/ig/posts");
});

app.get("/ig/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

app.get("/ig/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.patch("/ig/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);

  let newContent = req.body.content;
  post.content = newContent;

  let newPhoto = req.body.photo;
  post.photo = newPhoto;

  res.redirect("/ig/posts");
});

app.delete("/ig/posts/:id", (req, res) => {
  let { id } = req.params;

  posts = posts.filter((p) => id !== p.id);

  res.redirect("/ig/posts");
});

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
