// one to many /Approach3 (one to millions)

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    (console, log(err));
  });

async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/relationDemo`);
}

// yaha par basically jab multiple posts kisi ek user ne kiya ho to use database mai manage karne ke liye aise schemas likhte hai taaki har posts mai uske designated user ka objectId show ho

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "InstaUser",
  },
});

const InstaUser = mongoose.model("InstaUser", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user1 = new InstaUser({
    username: "rahulkumar",
    email: "rahul@gmail.com",
  });

  let post1 = new Post({
    content: "Hello World!",
    likes: 7,
  });

  post1.user = user1;

  await user1.save();
  await post1.save();
};

//addData();

const addData2 = async () => {
  let user = await InstaUser.findOne({ username: "rahulkumar" });

  let post2 = new Post({
    content: "Bye Bye :)",
    likes: 23,
  });

  post2.user = user;

  await post2.save();
};

//addData2();

// using populate() to show the references data in deatil

const getData = async () => {
  let result = await Post.findOne({}).populate("user", "username");
  console.log(result);
};

getData();
