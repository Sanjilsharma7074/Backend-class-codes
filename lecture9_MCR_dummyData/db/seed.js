const User = require("../models/User.schema")

const dummyUsers = [
  {
    name : "user 1",
    email:"user1@gmail.com",
    age:18,
    DOB : new Date("12/07/2006")
  },
  {
    name : "user 2",
    email:"user2@gmail.com",
    age:19,
    DOB : new Date("12/08/2006")
  },
  {
    name : "user 3",
    email:"user3@gmail.com",
    age:20,
    DOB : new Date("12/09/2006")
  },

]

async function bulkUserUpload(){
  try{
    let users = await User.insertMany(dummyUsers);
    console.log("users uploads to DB");
  }catch(error){
    console.log(error.message);
    throw new Error(error.message);
  }

}

module.exports = bulkUserUpload;