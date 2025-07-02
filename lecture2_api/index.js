const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

//This is an API
app.get('/',(req,res) => {
  // res.send("Server is Live.")
  const result = {
    name : "nothing",
    work : null
  }
  res.json(result);//object is passed into res.json either made through a var or directly
})
// An API is been hit through your browser

app.post("/",(req,res) => {
  console.log(req.body);
  res.send("ok");
})

app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:8000`);
})