1. The await keyword is used inside an async function so that before executing the a line of the code written after the use of await keyword is waiting till the time current line of code is not exceuted successfully(the current line of code is the one where we have used the await keyword)

const {name, email} = req.query;
const result = await userCollection.insertOne({name,email});
res.status(201).json({result});

- Here if we execute third line of the code before executing 2nd line of the code, the variable result will then store either a garbage value or null value and the same value will then be sent back as a response, hence with the help of await we are asking the compiler to first help us execute the second line completely and till the time it is executed please keep further line of codes in the waiting list.

2. {
    "result": {
        "acknowledged": true,
        "insertedId": "6874827ad79e538e7f41d28f"
    }
}

Whenever you insert a data, its own unique ID is generated which is stored inside insertedID key and acknowledged return true if the data is inserted successsfully

3. To view the data we have inserted and to insert or delete data in DB manually we can use compass.

4. Whenever you generate or insert a data, mongoDB automatically assign it a unique key => _id - 6874827ad79e538e7f41d28f

5. Database	                Purpose
    admin	                Admin commands, root users, server-level ops
    local	                Internal data (non-replicated), oplogs
    config	              Metadata for sharding
    sample_mflix	        Sample data for practice

6. To refresh mongoDB compass - ctrl+R

7. create the keys of the objectsin string

8. We cannot pass an array inside the body in postman, and we must destructure instead => we must send an object only, hence we created an object named users within which we stored an array of objects 

9. {
    "message": "Cannot destructure property 'users' of 'req.body' as it is undefined."
}

this has occured because of teh absence of express.json() middleware

10. we have used _id as an attribute while deleting the users  because it is the only unique property a user will have which would differ from other users.

11. Every document in MongoDB has a unique _id.

_id is of type ObjectId, not string.

So, when matching on _id, wrap the id string:

{ _id: new ObjectId(id) }