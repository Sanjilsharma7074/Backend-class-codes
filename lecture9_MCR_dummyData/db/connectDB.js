const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log("DB Connected");
}

module.exports = connectDB;