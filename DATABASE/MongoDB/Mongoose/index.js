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
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// creating schema of the document within collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// creating a model/class referred as Collection in mongodb
const User = mongoose.model("User", userSchema);

// creating an object for model referred as document in mongodb

const user1 = new User({
  name: "Adam",
  email: "adam@yahoo.in",
  age: 48,
});

user1.save();

// inserting document in mongodb collection

// inserting one document only
const user2 = new User({
  name: "Eve",
  email: "eve@yahoo.in",
  age: 48,
});

user2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// inserting many document together
User.insertMany([
  { name: "Tony", email: "tony@gmail.com", age: 50 },
  { name: "Peter", email: "peter@gmail.com", age: 53 },
  { name: "Bruce", email: "bruce@gmail.com", age: 47 },
]).then((res) => {
  console.log(res);
});

// finding document in mongodb collections

// find all documents
User.find({})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// find documents based on some conditions
User.find({ age: { $gt: 48 } })
  .then((res) => {
    console.log(res[0].name);
  })
  .catch((err) => {
    console.log(err);
  });

// find one document based on some conditions
User.findOne({ age: { $gt: 47 } })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// find one document by using its id
User.findById("6a4a6ccc05d1457a0e6c97cd")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// updating documents in mongodb collections

// updating one document only
User.updateOne({ name: "Bruce" }, { age: 49 })
  .then((res) => {
    console.log(res); // returs some extra data instead of document
  })
  .catch((err) => {
    console.log(err);
  });

User.findOneAndUpdate({ name: "Bruce" }, { age: 50 }, { new: true })
  .then((res) => {
    console.log(res); // returns updated document
  })
  .catch((err) => {
    console.log(err);
  });

User.findByIdAndUpdate("6a4a6f29870cea65ecbc25be", { age: 55 }, { new: true })
  .then((res) => {
    console.log(res); // returns updated document
  })
  .catch((err) => {
    console.log(err);
  });

// updating many document together
User.updateMany({ age: { $gt: 48 } }, { age: 55 })
  .then((res) => {
    console.log(res); // returs some extra data instead of document
  })
  .catch((err) => {
    console.log(err);
  });

// deleting document from mongodb collections

// deleting one document only
User.deleteOne({ name: "Bruce" }).then((res) => {
  console.log(res); // returs some extra data instead of document
});

User.findOneAndDelete({ name: "Tony" }).then((res) => {
  console.log(res); // returs the deleted document
});

User.findByIdAndDelete("6a4a6f29870cea65ecbc25bd").then((res) => {
  console.log(res); // returs the deleted document
});

// deleting many document together
User.deleteMany({ age: 48 }).then((res) => {
  console.log(res);
});
