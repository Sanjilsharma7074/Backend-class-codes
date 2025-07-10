const express = require("express");
const app = express();
const PORT = 4000;
const {MongoClient} = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.DATABASE_URL);
let userCollection;

//connecting to the Database
async function main(){
  await client.connect();
  const db = client.db("G24");
  userCollection = db.collection("users"); // This will create a collection called user on mongoDB server

  return "done";

}

app.listen(PORT , () => {
  main().then(() => console.log("DB connected"))
  .catch((err) => console.log(err))
  console.log(`Server is live at http://localhost:${PORT}`);
})