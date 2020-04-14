const path = require('path');
const fsPromises = require('fs').promises;

const getCards = (req, res) => {
  fsPromises.readFile(path.join(__dirname, '../data/cards.json'), { encoding: 'utf8' })
    .then((data) => {
      res.status(200).json(JSON.parse(data));
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

module.exports = { getCards };
