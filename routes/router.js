
const router = require('express').Router();
const { getCards } = require('./cards');
const { getUsers, doesUserExist, sendUser } = require('./users');

router.get('/cards', getCards);
router.get('/users', getUsers);
router.get('/users/:id', doesUserExist);
router.get('/users/:id', sendUser);

module.exports = router;
