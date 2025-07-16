const mongoose = require("mongoose");

// we are creating the type of the document here => defining the attributes and its type but we havent created collection till now
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    trim: true, // to remove the extra white spaces
  },
  email: {
    type: String,
    required: true,
    unique: true, // to make this attribute a primary key
  },
  age: {
    type: Number,
    maxLength: 150, // max age the user can input
    minLength: 1, //min age the user can input
  },
  DOB: {
    type: Date,
  },
});

//creating collection 
const User = mongoose.model("User",userSchema);

module.exports = User;