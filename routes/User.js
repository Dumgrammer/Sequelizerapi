const express = require('express');
const router = express.Router();

const userController = require('../controllers/User')

router.get('/', userController.getUser);

router.post('/', userController.createUser);
//advanced appraoch of routing

module.exports = router