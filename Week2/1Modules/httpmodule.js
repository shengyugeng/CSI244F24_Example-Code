//http module is used to setup a webserver
//#1 require http
//#2 create a variable using http.createServer()
//#3 tell the server to listen on a port
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  //handle the different types of requests
  //req contains all of the information that came into your webserver
  //res is how you send something back to the user
  if (req.url === "/") {
    res.end("This is the index");
  }
  if (req.url === "/about") {
    //we need to access about.html and send
    const filePath = path.join(__dirname, "about.html");
    fs.readFile(filePath, "utf8", (error, data) => {
      if (error) {
        res.end(error);
      } else {
        res.end(data);
      }
    });
  }
});

//listen on a port
//this runs on localhost:3000 127.0.0.1:3000
server.listen(3000, () => {
  console.log("Server started on port 3000");
});
