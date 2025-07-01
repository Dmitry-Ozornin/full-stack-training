const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  const FileHome = path.join(__dirname, "countHome.json");
  const personData = JSON.parse(fs.readFileSync(FileHome, "utf-8"));
  const id = 0;
  
  for (let i = 0; i < personData.length; i++) {
    if(personData[i].url == '/')
    personData[i].count++;
    
  }
  let countHome = personData[id].count;

  res.send(`<h1>Главная</h1> <p>просмотров ${countHome}</p> <a href="/about">about</a>`);
  fs.writeFileSync(FileHome, JSON.stringify(personData, null, 2));
});

app.get("/about", (req, res) => {
     const FileHome = path.join(__dirname, "countHome.json");
  const personData = JSON.parse(fs.readFileSync(FileHome, "utf-8"));
  const id = 1;
  
  for (let i = 0; i < personData.length; i++) {
    if(personData[i].url == '/about')
    personData[i].count++;
    
  }
  let countHome = personData[id].count;

  res.send(`<h1>Обо мне</h1> <p>просмотров ${countHome}</p> <a href="/">Главная</a>`);
  fs.writeFileSync(FileHome, JSON.stringify(personData, null, 2));


});

app.listen(3000);
