// one to many /Approach2 (one to lakhs)

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

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// here on adding multiple orders data in customer model, in terminal we will see that the actual data is also added but when we see in mongodb, we see that only objectid of that orders are added

const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Rahul Kumar",
  });

  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocolate" });

  cust1.orders.push(order1);
  cust1.orders.push(order2);

  let result = await cust1.save();
  console.log(result);
};

//addCustomer();

// if we want to see entire data of orders instead of just objectid, we use populate()
const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};

findCustomer();

const addOrders = async () => {
  let res = await Order.insertMany([
    { item: "Samosa", price: 12 },
    { item: "Chips", price: 10 },
    { item: "Chocolate", price: 40 },
  ]);

  console.log(res);
};

//addOrders();
