const express = require('express');
const loginController = require('../../app/controllers/LoginController');
const router = express.Router();


router.post('/', loginController.index);


module.exports = router;