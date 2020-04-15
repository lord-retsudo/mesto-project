const path = require('path');
const fsPromises = require('fs').promises;
const cards = require('express').Router();

const getCards = (req, res) => {
  fsPromises.readFile(path.join(__dirname, '../data/cards.json'), { encoding: 'utf8' })
    .then((data) => {
      res.status(200).json(JSON.parse(data));
    })
    .catch((err) => {
      res.status(500).send({ message: "На сервере произошла ошибка" });
    });
};

cards.get('/', getCards);

module.exports = cards;