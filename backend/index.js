require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const Holding = require("./models/HoldingsSchema.js");
const Position = require("./models/PositionsSchema.js");
const Order = require("./models/OrdersSchema.js");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

async function main() {
  await mongoose.connect(uri);
}

main()
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });



app.get("/allHoldings", async (req, res) => {
  let allHoldings = await Holding.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await Position.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  let allOrder = await Order.find({});
  res.json(allOrder);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new Order({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

//WatchList
app.delete("/sellOrder/:name", async (req, res) => {
  try {
    const deletedOrder = await Order.findOneAndDelete({
      name: req.params.name,
    });
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
});

app.listen(PORT, () => {
  console.log("App is listning to port : " + PORT);
});
