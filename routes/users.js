const fsPromises = require('fs').promises;
const path = require('path');


const doesUserExist = (req, res, next) => {
  fsPromises.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' })
    .then((users) => {
      const userExist = JSON.parse(users).some((item) => item._id === req.params.id);

      if (!userExist) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }

      next();
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

const sendUser = (req, res) => {
  fsPromises.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' })
    .then((users) => {
      const user = JSON.parse(users).find((item) => item._id === req.params.id);
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

const getUsers = (req, res) => {
  fsPromises.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' })
    .then((users) => {
      res.status(200).json(JSON.parse(users));
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

module.exports = { doesUserExist, sendUser, getUsers };
