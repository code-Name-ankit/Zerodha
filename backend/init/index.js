const mongoose = require("mongoose");
const watchlistData = require("./watchlistData.js");
const holdingData = require("./holdingData.js");
const positiontData = require("./positionData.js");

 const  Holding  = require("../models/HoldingsSchema.js");

 const  Position  = require("../models/PositionsSchema.js");
 const  Order  = require("../models/OrdersSchema.js");


const uri = "mongodb://127.0.0.1:27017/Zerodha"

async function main() {
  await mongoose.connect(uri);
}

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
    
  

const holdingInitDB = async () => {
  await Holding.deleteMany({});
     await Holding.insertMany(holdingData.data);
  console.log("Database initialized with data");
};
holdingInitDB();

// const positionInitDB = async () => {
//   await Position.deleteMany({});
//      await Position.insertMany(positiontData.data);
//   console.log("Database initialized with data");
// };
// positionInitDB();


// const orderInitDB = async () => {
//   await Order.deleteMany({});
//      await Order.insertMany(holdingData.data);
//   console.log("Database initialized with data");
// };
// orderInitDB();

