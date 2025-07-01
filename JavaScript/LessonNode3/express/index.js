const express = require("express");

const app = express();
// app.get("/", (req, res) => {
//   res.send('<h1>Добро пожаловать</h1> <a href="/about">about</a>');
// });

// app.get("/about", (req, res) => {
//   res.send('<h1>about</h1> <a href="/">home</a>');
// });

// app.listen(3000);

app.use(express.static('static'));
app.listen(3000);

