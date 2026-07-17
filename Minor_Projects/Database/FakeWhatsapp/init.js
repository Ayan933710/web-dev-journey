const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/fakewhatsapp`);
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "raju",
    to: "sona",
    msg: "send me your sheets",
    created_at: new Date(),
  },
  {
    from: "arya",
    to: "sonam",
    msg: "send me your exam papers",
    created_at: new Date(),
  },
  {
    from: "riya",
    to: "ayan",
    msg: "send me your photos",
    created_at: new Date(),
  },
  {
    from: "ridhi",
    to: "ayan",
    msg: "send me your pics",
    created_at: new Date(),
  },
  {
    from: "raja",
    to: "ridhii",
    msg: "hii",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
