// one to many /Approach1 (one to few < 10^3)

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

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "SherlockHolmes",
    addresses: [{ location: "P32 Wall Street", city: "London" }],
  });

  user1.addresses.push({ location: "221B Baker Street", city: "London" });

  let result = await user1.save();
  console.log(result);
};

addUsers();
