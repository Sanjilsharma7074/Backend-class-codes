const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const connectDB = require("./db/connectDB")
const User = require("./models/User.schema")
const bulkUserUpload = require("./db/seed")
require("dotenv").config();

//routers
const userRouter = require("./routes/user.routes")


// Use express.json() when you're expecting JSON data (from APIs, mobile apps, etc.).
// Use express.urlencoded() when handling HTML form submissions.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//path specific middleware
app.use("/user",userRouter)

app.post("/user/create",async(req,res) => { 
  try{
    const {name,email,age,DOB} = req.body;
    //DOB will occur in string , hence when you insert it into your DB typecast it to the Date type
    const user = await User.create({
      name: name, //l-value is the key name the name which we destructured above while  r-value is the value we got from the user
      email: email,
      age: age,
      DOB: new Date(DOB),
    });
    res.status(201).json({user});
  }catch(error){
    res.status(400).json({message : error.message});
  }
})


connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log(error);
  
})