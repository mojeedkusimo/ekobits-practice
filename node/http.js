const http = require("http");

const server = http.createServer((req, res, next) => {

    res.writeHead(200, { "Content-type" : "text/html" });
    res.write("<h1>Hello World</h1>");

    return res.end();
});

server.listen(3040, () => {
    console.log("Go to localhost: 3000");
});