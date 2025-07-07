// const formatDate = require("./helper/date-converter"); => this method of exporting was used when we exported a single function
// in case we are exporting more than 1 function and wish to import just one function out of them all then we use the given below syntax to import the function and not the above one 

// const {formatDate} = require("./helper/date-converter");
const {formatDate, dateConverter} = require("./helper/date-converter");

let date = formatDate(new Date());
console.log(date);

let localdate = dateConverter(new Date());
console.log(localdate);

const fs = require("fs");

console.log(100);
const result = fs.writeFileSync("name.txt", "my name is sanjil");
console.log(result);
console.log(200);

const content = fs.readFileSync("name.txt", "utf-8");
console.log("sync : ", content);

// an async method hence it returns a callback function
// This function is sent to run to teh web API and it will keep running in the call stack till the time it not completely excuted
const data = fs.readFile("name.txt","utf-8",(err,data) => {
  console.log("Async : ",data);
})


console.log(1);

//fs.writeFile(filename, data, callBack Function)
// fs.writeFile("./text.txt","Hello World ", (err) => {
//   console.log(err);
//   console.log("done");
// }); 
fs.writeFile("./text.txt","Hello World !!", (err) => {
  console.log(err);
  console.log("done");
}); 

console.log(2);

//to push some content into the file, its also an async function since it does not contain sync keyword in its name
fs.appendFile("./text.txt","\n Helo again",(err) => {
  console.log("done writing extra content");
  
});

const newResult= fs.appendFileSync("name.txt","\nhelloo everyone");
console.log("successfully appended using sync : ",newResult);

// to delete a file 

// fs.unlink("./text.txt",(err) => {
//   console.log("Not found");
//   console.log("File deleted");
// })