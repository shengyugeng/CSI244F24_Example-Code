//In Node the main module is called server.js or app.js
console.log("Hello Node");
//node is modular and we can import built in modules to use
// const nameofmodule = require("nameofmodule");
//os - gives you information about the operating system, memory or cpu
const os = require("os");
//we get can get the platform
//creating an object
const sysInfo = {
  platform: os.platform(),
  arch: os.arch(),
  memory: os.freemem(),
};
console.log(sysInfo);
//filesystem library (fs)
const fs = require("fs");
//readfile and writefile
//writefile
//writefile() takes 3 arguments - first is the name of the file to be written
//2nd is the data you want to write
//3rd is a callback function to handle errors or notify if success
function checkError(error) {
  if (error) {
    console.log("error");
  } else {
    console.log("Success");
  }
}
//rewrite this using an arrow function instead of checkError:
fs.writeFile("test.txt", "Testing FS.WriteFile", (error) => {
  if (error) {
    console.log("error");
  } else {
    console.log("success");
  }
});
//readFile() filename, "utf8", callback function that will be passed an error and data if any
fs.readFile("test.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
//path library
//path simplies file folder, extensions, any sort of path related
const path = require("path");
//get the extension of a file
const ext = path.extname("test.txt");
console.log(ext);
const base = path.basename("test.txt");
console.log(base);
//theres a few global objects
//__filename
//__dirname
console.log(__filename);
console.log(__dirname);

const fullPath = path.join(__dirname, "newFolder", "testing.txt");
console.log(fullPath);
