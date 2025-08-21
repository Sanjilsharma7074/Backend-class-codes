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
    select: false // this field will not be included when server retrieve user data form the DB
  },
  role:{
    type:String,
    enum:["user","admin"],  //role can only have two values i.e. "user","admin"
    default:"user",
    select:false
  }
},
{
  timestamps : true
}
)

const User = mongoose.model("User",userSchema);

module.exports = User;

