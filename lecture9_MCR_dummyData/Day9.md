1. To have dummy data stored for our website we are using seed.js file

2. We will create an array of objects to insert that array inside teh query insertMany

3. seed.js is not connected to the server automatically and hence we have to connect it to the server manually 

Operation `users.insertMany()` buffering timed out after 10000ms => this error tells us that the seed.js is not connected to the server automatically.
This tells that the insertMany operation is not valid because seed.js is not connected to the databse which mean seed.js is nit connect to the server
Just because we have made a file inside a folder called DB doesnt mean that all the connection will be done automatically and we actually have to do all teh connections manually 

4. async function bulkUserUpload(){
  try{
    let users = await User.insertMany(dummyUsers);
    console.log("users uploads to DB");
  }catch(error){
    console.log(error.message);
    throw new Error(error.message);
  }

}

when i have upload the same users again i do not get any error in my API because we handled it using try catch and the error is simple displayed to the console, but we do need our code to display error in case of inserting the same users again and hence we use throw error line inside our function os that he error is forwarded and displayed to the API and is not just handled my consoling it in this case => we'll get the error of duplicate email values in this case since email is supposed to be unique

5. MRC = models folder is used to store schemas and create collections

  routes folder is used to store and categorise routes and APIs(categorise = a website might have different functionalities, like a single website would have differen routes - one for authentication, one for login or signup and one for some other feature)

  Controllers = we write logics inside our routes , like creating users, and many other, all the functions we create are parts of logics and hence are created isnide controllers

  6. We create the express.Rputer() because within our routes we cannot again creat an app which will import express since we have already created one on the main server, hence we will use ROuter feature in here , hence to avoid the creation of a complete new server while simulatenously creating all the routes we use ROuter, with the help of router we can create API without the creation app

  7. path specific middlewares helps us call teh routers 

  8. /user/create => /user is from middlewares , /create is from routers

  