const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.model.js");
const { initialize } = require("passport");

const MONGO_URL = "mongodb://localhost:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "66bc7eec9a5ee138ba9d7146",
  }));
  await Listing.insertMany(initdata.data);
  console.log("data was initalized.");
};

initDB();
