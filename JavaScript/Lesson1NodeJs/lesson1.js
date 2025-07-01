// function counter(n) {
//   console.log(n);
//   setTimeout(() => counter(n - 1), 0);
// }

// counter(0);

// setTimeout(() => {
//   console.log("скрип завершен");
//   process.exit();
// }, 1000);

const http = require("http");

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<p1>Да</p1>");
  } else{
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<p1>нет соеденения</p1>");

  }
});

const port = "3000";

server.listen(port);
