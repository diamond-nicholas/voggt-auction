const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.route('/').post(userController.createUser);

module.exports = router;
