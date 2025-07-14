const express = require("express");
const app = express();
const PORT = 4000;
const { MongoClient } = require("mongodb");
const {ObjectId} = require("mongodb");
require("dotenv").config();

app.use(express.json());

const client = new MongoClient(process.env.DATABASE_URL);
let userCollection;

//connecting to the Database
async function main() {
  await client.connect();
  const db = client.db("G24");
  userCollection = db.collection("users"); // This will create a collection called user on mongoDB server

  return "done";
}

//lets create an API which has the async type for its callback function
app.get("/user", async (req,res) =>{
 try
  {const {name, email} = req.query;

  //insertOne helps us send only one object
  const result = await userCollection.insertOne({name,email});
  res.status(201).json({result});}
  catch(error){
    res.status(400).json({message : error.message})
  }
})

//to send multiple objects we sue insertMany query => we can send an array into this query 
app.post("/users",async (req,res) => {
  try{
    const {users} = req.body;
    const result = await userCollection.insertMany(users);
    res.status(201).json({result});
  }catch(error){
    res.status(400).json({message : error.message});
  }
})

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userCollection.deleteOne({ _id: new ObjectId(id) });
    res.status(201).json({ result, message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


app.listen(PORT, () => {
  main()
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
  console.log(`Server is live at http://localhost:${PORT}`);
});
