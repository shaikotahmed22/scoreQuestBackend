const mongoose = require("mongoose");

const mongoConnect = async () => {
  const MONGODBURI = process.env.MONGOURI;
  try {
    await mongoose.connect(MONGODBURI);
    console.log("Database is connected...");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = mongoConnect;
