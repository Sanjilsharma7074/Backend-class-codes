const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

//This is an API
app.get('/',(req,res) => {
  res.send("Server is Live.")
})

app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:8000`);
  
})