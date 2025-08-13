const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:{
    type : String,
    required: true,
  },
  email:{
    type:String,
    required: true,
    unique:true
  },
  password:{
    type:String,
    required: true,
    minLength: 6,
    selectt: false // this field will not be included when server retrieve user data form the DB
  }
},
{
  timestamps : true
}
)

const User = mongoose.model("User",userSchema);
module.exports = User;

