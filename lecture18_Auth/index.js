const express = require("express");
const connectDB = require("./db/connectDb");
const app = express();
const PORt = 4000;
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res) => {

})

connectDB().then(()=>{
  app.listen(PORt, () => {
    console.log(`Server is live at : http://localhost:${PORT}`);
  });
}).catch((error) =>{
  console.log(error);
})

