1. Mongoose creates a structure of mongoDB
MongoDB itself is schema-less (doesn't enforce any structure).

Mongoose lets you define a structure (called a Schema) for your documents — like saying:
“Each user must have a name (string), age (number), email (string)”.

   - provides connection to cluster
   Mongoose helps you connect to your MongoDB database or Atlas cluster easily using a connection string.
   mongoose.connect('mongodb+srv://username:password@cluster.mongodb.net/dbname');

   - provide easy queries for CRUD operation
   Mongoose simplifies Create, Read, Update, Delete (CRUD) using methods like:

      .save()

      .find()

      .findByIdAndUpdate()

      .deleteOne()
      User.find({ age: { $gt: 20 } })  // Finds users where age > 20
         
      - provide "structure" to the collection
      This means your collection (like "users") now follows a specific schema defined by you in Mongoose.
      MongoDB alone doesn’t enforce this structure.



  2. structure - defining attribute (fields)
               - defines attribute "types"
               - put restriction on attribute value

               This explains what “structure” actually means in Mongoose:

               Defining attributes (fields):
               You decide which fields every document should have.
               Example: name, age, email.

               Defines attribute "types":
               Each field must have a specific type:
               Example: name is a String, age is a Number.

               Put restriction on attribute value:
               You can enforce rules like:

               required: true (field must be present)

               min and max (for numbers)

               Regex patterns (for email formats)

               Example Schema:

               const userSchema = new mongoose.Schema({
               name: { type: String, required: true },
               age: { type: Number, min: 0 },
               email: { type: String, match: /.+\@.+\..+/ }
               });

3. mongoose provide such queries with teh help f which we can make changes in our actual mongoDB

Mongoose methods let you directly manipulate documents in your real MongoDB database.
You write simple JS code, Mongoose converts it into actual MongoDB operations.

Example:
const user = new User({ name: "Alex", age: 25 });
user.save();  // Saves to MongoDB

4. we can insert any type of structure inside the mongodb collection    

This is about MongoDB alone — without Mongoose:

MongoDB doesn’t care about structure.
You can insert anything:

db.users.insertOne({ x: 1, y: 2 });
db.users.insertOne({ name: "Sanjil", city: "Delhi" });
db.users.insertOne({ randomArray: [1,2,3] });
Mongoose prevents such inconsistency by enforcing schemas.



5. Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. In simple terms, it’s a tool that helps you interact with a MongoDB database using JavaScript in a more structured and simplified way.

MongoDB stores data in a flexible JSON-like format called BSON, without enforcing schemas (structure of documents). 
 Mongoose adds structure (schemas) and helpful features on top of MongoDB.


 6. we will not start the application till the time we are connected to teh database, which is teh complete opposite of what we did in case of connecting mongoDB atlas and comapss where we called teh connectDB function inside the app.listen(), so that as son as we start the server we perform the connection of the DB to the server

 app.listen will be written within connectDB() this time

 7. {
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "webpack --config webpack.config.js",
    "test": "jest",
    "deploy": "npm run build && scp ./dist/* user@server:/var/www/html",
    "lint": "eslint ."
  }
}
| **Command Name** | **Purpose**                                                   | **Example Actual Command**           |
| ---------------- | ------------------------------------------------------------- | ------------------------------------ |
| **start**        | Start production server                                       | `node index.js`                      |
| **dev**          | Run development server with hot-reload (like using `nodemon`) | `nodemon index.js`                   |
| **build**        | Compile/bundle project (using Webpack, Vite, etc.)            | `webpack --config webpack.config.js` |
| **test**         | Run test files                                                | `jest` or `mocha`                    |
| **deploy**       | Automate build and deploy steps                               | `npm run build && scp ...`           |
| **lint**         | Check code for style/format errors                            | `eslint .`                           |


npm run start

npm run dev

npm run build

npm run test

npm run deploy

npm run lint

Note: For the start command specifically, you can just run: npm start

8. Befre creating a collection we define the structure we want for it(also called schema).

9. We mght have 10-12 schemas -> hence we make another flder called model which will contain all the structures for your schemas

10. In mongoose collection is known as model
collection Name, and schema, the collection name shpuld always have captial first letter and should be singuler and when you will go to mongoose you will notice that the collection name will then be changed into users -> will becone plural  

11. After defining teh structre and creating a schema for it, we will now perform CRUD operations on the User schema 