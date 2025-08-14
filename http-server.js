const http = require("http");
const PORT = 3000;

const server = http.createServer(function listener(req, res) {
  console.log("Request Received...");
  console.log("Method:", req.method);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello From The Native HTTP Server!");
});

server.listen(PORT, function exec() {
  console.log(`The Server is Up and Running on Port: ${PORT}`);
});
