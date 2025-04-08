const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const { log } = require("console");
dotEnv.config();

const mongodbUrl = process.env.mongodbUrl;
const connectToMongoDb = async () => {
  console.log("connecting to db...");

  try {
    const connected = await mongoose.connect(mongodbUrl);
    if (connected) {
      console.log("Mongodb connected");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongoDb;
