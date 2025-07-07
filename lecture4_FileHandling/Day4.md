1. require , returns an object -> and within the object we store all  the functions or methods exported

//Here formatDate and dataConverter are the variables
const {formatDate,dataConverter} = 
  {
    formatDate:()=>{
      //code of this function
    },
    dateConverter:() => {
      //code
    }
  }

2. FS(File System) module
  - const fs = require("fs") => helps us read and write in a file
  - Both read and write operations exists in both sync and async 

3. blocking operations -> synchronous methods
   non-blocking operations -> asynchronous methods

4. writeFile operation of the fs module creates a file if does not already exists and push the data into the file.
   But if teh file does exists then it overwrites the content of the file with a new content.
   Also, it does not return anything if stored inside a var since its return type is void, Hence storing the output of the file in a var doesn't help you in any way.

5. fs.writeFile() will run on web API and callback functions are also used on async functions so that when the working of the functions is terminated they can call the callback functions. 

6. fs.writeFileSync() is a synchronous function — it does NOT accept a callback. That means this part of your code:
   (err) => {
  console.log(err);
  console.log("done for sync");
  }
  is simply ignored (but not even used, silently), and not executed.

7. console.log(100);
const result = fs.writeFileSync("name.txt", "my name is sanjil");
console.log(result);
console.log(200); 

=> since both sync and async functions of write does not return anything hence result stores undefined.

8. Event Cycle => event queue, event loop,thread and workers, req are of 2 types - blocking and non blocking
