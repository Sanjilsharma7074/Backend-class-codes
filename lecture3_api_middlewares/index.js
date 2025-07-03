const express = require("express");
const app = express();
const PORT = 8000;

// we'll create a function inside app.use() which will run as a callback function of the middleware
app.use((req,res,next) => {
  console.log("Generic Middleware it is!");
  next();
})
app.use((req,res,next) => {
  console.log("Generic Middleware2 it is!");
  next();
})

app.get('/user',(req,res)=>{
  console.log(req.query.number);
  const{name} = req.query; //destructuring 
  console.log(name);
  
  res.status(200).send("ok")
})

// id is dynamic here which is a param, its value can vary everytime you enter something in the URL
app.get('/user/:id', (req,res) => {
  const {id} = req.params;
  console.log(id);
  
  res.status(200).send("success");
})

// to send multiple id's in the params
app.get('/user/:id/:payment_id', (req,res) => {
  const {id,payment_id} = req.params;
  console.log(id);
  console.log(payment_id);
  console.log(req.params);
  res.status(200).send("success");
})

app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);
})