const fs = require("fs");
const express = require("express");
const path = require("path");
const joi = require("joi");
const { error } = require("console");
const app = express();
const pathUsers = path.join(__dirname, "users.json");

// валидация
const UserSheme = joi.object({
  firstname: joi.string().min(2).max(30).required(),
  secondName: joi.string().min(2).max(30).required(),
  age: joi.number().min(0).max(200).required(),
  city: joi.string().min(1).max(30),
});

app.use(express.json());

// GET /users получение всех пользователей
app.get("/users", (req, res) => {
  const usersData = JSON.parse(fs.readFileSync(pathUsers, "utf-8"));

  res.send({ users: usersData });
});

// // GET /users/:id
app.get("/users/:id", (req, res) => {
  const usersData = JSON.parse(fs.readFileSync(pathUsers, "utf-8"));
  const userId = +req.params.id;
  const user = usersData.find((findUser) => findUser.id === userId);

  if (user) {
   
    fs.writeFileSync(pathUsers, JSON.stringify(usersData, null, 2));
    res.send({ user });
  } else {
    res.status(404);
    res.send( "пользователя не существует");
  }
});


// POST /users создание пользователь и id его
app.post("/users", function (req, res) {
  const result = UserSheme.validate(req.body);

  if (result.error) {
    return res.status(400).send({ error: result.error.details });
  }
  let maxId = 0;
  const usersData = JSON.parse(fs.readFileSync(pathUsers, "utf-8"));
  for (let i = 0; i < usersData.length; i++) {
    if ("maxUserId" in usersData[i]) {
      maxId = usersData[i].maxUserId + 1;
      usersData[i].maxUserId = maxId;
    }
  }

  usersData.push({
    id: maxId,
    ...req.body,
  });
  fs.writeFileSync(pathUsers, JSON.stringify(usersData, null, 2));
  res.send({ id: maxId });
});

// PUT /users/:id изменения пользователя
app.put("/users/:id", (req, res) => {
  const result = UserSheme.validate(req.body);
  if (result.error) {
    return res.status(400).send({ error: result.error.details });
  }
  const userId = +req.params.id;
  const usersData = JSON.parse(fs.readFileSync(pathUsers, "utf-8"));
  const user = usersData.find((findUser) => findUser.id === userId);

  if (user) {
    const { firstname, secondName, age, city } = req.body;
    user.firstname = firstname;
    user.secondName = secondName;
    user.age = age;
    user.city = city;
    fs.writeFileSync(pathUsers, JSON.stringify(usersData, null, 2));
    res.send({ user });
  } else {
    res.status(404);
    res.send( "пользователя не существует");
  }
});

// // Delete /users/:di удаление пользователя
app.delete("/users/:id", (req, res) => {
  const usersData = JSON.parse(fs.readFileSync(pathUsers, "utf-8"));
  const userId = +req.params.id;
  const user = usersData.find((findUser) => findUser.id === userId);

  if (user) {
    const userIndex = usersData.indexOf(user);
    usersData.splice(userIndex, 1);
    fs.writeFileSync(pathUsers, JSON.stringify(usersData, null, 2));
    res.send({ user });
  } else {
    res.status(404);
    res.send( "пользователя не существует");
  }

});

app.listen(3000);

// // npm i nodemon чтобы не перезапускать серверт
