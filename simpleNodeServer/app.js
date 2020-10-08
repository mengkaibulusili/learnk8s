const http = require("http");
const os = require("os");

console.log("kiki server is starting");

var handler = (request, response) => {
  console.log("recived request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("<h1>you have hit " + os.hostname() + "\n</h1>");
};

var www = http.createServer(handler);
www.listen(8080);
