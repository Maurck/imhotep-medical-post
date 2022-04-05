const express = require('express');
const router = express.Router();

const user = require('./user');
// const users = require('./users');
// const message = require('./message');
// const messages = require('./messages');
const home = require('./home');

router.use('/user', user);
// router.use('/users', users);
// router.use('/message', message);
// router.use('/messages', messages);
router.use('/', home);

module.exports = router;