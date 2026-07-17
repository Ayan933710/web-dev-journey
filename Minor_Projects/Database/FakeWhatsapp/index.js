const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/fakewhatsapp`);
}

// root route
app.get("/", (req, res) => {
  res.send("root is working");
});

// index route
app.get("/chats", async (req, res, next) => {
  try {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
});

// new chat route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// new chat insert route
app.post("/chats", async (req, res, next) => {
  try {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });

    await newChat.save();

    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

// Show Message route
app.get("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(500, "Chat not found"));
    }
    res.render("show.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

// edit message route
app.get("/chats/:id/edit", async (req, res, next) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

// update message route
app.put("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updateChat = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg },
      { runValidators: true },
    );

    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

// delete chat route
app.delete("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

// handling particular errors using particular middlewares
const handleValidationErr = (err) => {
  console.log("This was a Validation error. Please follow rules.");
  console.dir(err.message);
  return err;
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationErr(err);
  }
  next(err);
});

// Error handling Middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some error occurred" } = err;
  res.status(status).send(message);
});

// port listening
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
