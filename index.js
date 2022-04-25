const http = require("http");

const port = process.env.PORT || 3000;

console.log("This and that");
console.log("Some other developers commit");

http
  .createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello There!");
  })
  .listen(port);

console.log(`Listening on port ${port}`);
