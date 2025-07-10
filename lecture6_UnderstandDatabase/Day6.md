Database => To store data separately so that in case of server failure, the data is safe.
Two types
1. Relational = Sql, Postgre SQL
2. Non relational = No-sql, MongoDB
(mongoose is an ORM of MongoDB , it provides us easy queries to perform CRUD operations, it also provide us different functions with the help of which we'll be able to perform advance taks very easily)

How to connect to mongoDb ? => mongoDB driver, mongoose => these 2 help us connect to mongoDB

The mongoDB we use to store data in local system would be differ in connection String when we'll upload data on cloud through a different connection string.

Database URL helps us access data from Atlas

1. MongoDB atlas is the mongoDB server within which we can create multiple projects.
2. We can create multiple clusters for a single project but we can have only one efree version of the cluster in a project.
3. We can create multiple databases in one cluster.
4. The string that you get as the MONGODB URL is given to you to connect to the cluster and not to connect the project to the database that is within the cluster.

5. A single Database will have multiple collections 

Here collection is a table which stores the data 

  - Users is one collection which stores all the data of the users 
  - Product info is another collection which stores all the data and info related to teh products
  - delivery info is another collection

6. One collection have many documents => Single User(for users collection) / Single product (witin product info collection)/ Single delivery info

7. Document is either in form of json or object

8. const client = new MongoClient(process.env.DATABASE_URL);

client - The variable name that will hold the MongoDB client instance.
new MongoClient(...)	- Creates a new instance of MongoClient to connect to MongoDB. This comes from the mongodb library

new MongoClient(...) means: “Make me a new MongoDB client I can use to talk to the database.”
Inside the (...), you provide the MongoDB connection string (like mongodb://localhost:27017), so it knows where to connect.

9. npm i dotenv
require("dotenv").config();

help us set configuration for the enviroment variables( Variable we will access from .env file)

10. The process of connection takes time hence we'll make an async function so that for that amount of time we can run other functions.

11. collection is created globally so that it can be accessed by any function.

12. We are creating a function to create and connect database and to initialise the collection because otherwise it would create new database everytime we will restart the server.
  We'll call the function inside app.listen() because we want it to start the momemt we start our server and to create the database at that very moment.