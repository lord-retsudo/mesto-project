const fsPromises = require('fs').promises;
const path = require('path');
const users = require('express').Router();

const sendUser = (req, res) => {
  fsPromises.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' })
    .then((data) => {
      const users = JSON.parse(data);
      const user = users.find(item => item['_id'] === req.params.id);

      if (user) {
        res.status(200).json(user);
        return;
      }

      res.status(404).send({ message: 'Нет пользователя с таким id' });
    })
    .catch((err) => {
      res.status(500).send({ message: "На сервере произошла ошибка" });
    });
};

const getUsers = (req, res) => {
  fsPromises.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' })
    .then((users) => {
      res.status(200).json(JSON.parse(users));
    })
    .catch((err) => {
      res.status(500).send({ message: "На сервере произошла ошибка" });
    });
};

users.get('/', getUsers);
users.get('/:id', sendUser);

module.exports = users;