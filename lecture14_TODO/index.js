const express = require("express");
const connectDB = require("./db/connectDb");
const app = express();
const PORT = 5000;
const path = require("path");
require("dotenv").config();

//routers 
const todoRouter = require("./routes/todo.routes")

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"public")));

app.use("/todo",todoRouter);

app.get("/",(req,res) => {

});

connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
  });
  
}).catch((err) => {
  console.log(err);
});

