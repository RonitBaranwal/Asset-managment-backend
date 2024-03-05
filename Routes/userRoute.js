const express = require('express');
const userController = require('./../controllers/userController');
const router = express.Router();

router.route('/postUser').post(userController.postUser);
module.exports = router;