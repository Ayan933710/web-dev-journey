const mongoose = require("mongoose");

// connecting mongodb with server using mongoose
main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

// selecting db name to use
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// creating schema of the document with rules within collection
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Price is too low for amazon selling"],
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "Marvel Comics",
  author: "Marvel",
  price: 1200,
  category: "fiction",
  discount: 20,
  genre: ["comics", "superheroes", "fiction"],
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// during updation of a schema with set of rules, if we update it normally it will not follow the rules and update the value ignoring the set rules.
// But if we want it to follow rules during updation, then we need to add a option and set it to true : {runValidators: true}

Book.findByIdAndUpdate(
  // will not run/update
  "6a4aa6dd0c226b199e6ac46a",
  { price: -100 },
  { runValidators: true },
)
  .then((res) => {
    (console, log(res));
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });
