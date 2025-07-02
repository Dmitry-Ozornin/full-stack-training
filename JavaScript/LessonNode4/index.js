const fs = require("fs");
const express = require("express");
const path = require("path");
const joi = require("joi");
const { error } = require("console");
const app = express();
const users = [];
let unickId = 0;

// валидация
const UserSheme = joi.object({
  firstname: joi.string().min(5).max(30).required(),
  secondName: joi.string().min(5).max(30).required(),
  age: joi.number().min(0).max(200).required(),
  city: joi.string().min(1).max(30)

});

app.use(express.json());
// GET /users получение всех пользователей
app.get("/users", (req, res) => {
  res.send({ users });
});

// GET /users/:id
app.get("/users/:id", (req, res) => {
  const userId = +req.params.id;
  const user = users.find((findUser) => findUser.id === userId);
  if (user) {
    res.send({ user });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});

// POST /users создание пользователь и id его
app.post("/users", function (req, res) {
    const result = UserSheme.validate(req.body);
    if(result.error){
        return res.status(400).send({error: result.error.details});
    }
  unickId += 1;
  users.push({
    id: unickId,
    ...req.body,
  });

  res.send({ id: unickId });
});

// PUT /users/:id изменения пользователя
app.put("/users/:id", (req, res) => {
    const result = UserSheme.validate(req.body);
    if(result.error){
        return res.status(400).send({error: result.error.details});
    }
  const userId = +req.params.id;

  const user = users.find((findUser) => findUser.id === userId);

  if (user) {
    const { firstname, secondName, age, city } = req.body;
    user.firstname = firstname;
    user.secondName = secondName;
    user.age = age;
    user.city = city;
    res.send({ user });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});

// Delete /users/:di удаление пользователя
app.delete("/users/:id", (req, res) => {
  const userId = +req.params.id;
  const user = users.find((findUser) => findUser.id === userId);
  if (user) {
    const userIndex = users.indexOf(user);
    users.splice(userIndex, 1);

    res.send({ users });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});

app.listen(3000);

// npm i nodemon чтобы не перезапускать серверт
