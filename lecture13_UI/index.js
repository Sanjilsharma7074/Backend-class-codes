const express = require("express");

const app = express();
const PORT = 5000;
const path = require("path");  // provides both absolute and relative path

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"public")))  //html and js files are called static files

//app.use(express.static) - redirects "/" get req to public folder => "/" get req will look for index.html int public 
// (path.join(__direname,"public")) - provides absolute path of the public

app.get("/",(req,res) => { }) // this request will run only if the index.html file is absent 
//this api is useless as we directed the "/" get req to public folder
// this api will run in one case i.e. if there is no "index.html" file in public

app.get("/user",(req,res) => {
  let user = {
    name : "user 1",
    age : 21,
    branch :"CSE",
  }
  res.status(200).json({user});
})

app.get("/contact",(req,res) =>{
  res.redirect("contact.html");
})

app.listen(PORT, () => {
  console.log(`Server is live at : http://localhost:${PORT}`);
})