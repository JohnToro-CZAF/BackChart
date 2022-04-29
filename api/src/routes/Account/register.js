const express = require('express');
const registerController = require('../../app/controllers/RegisterController');
const router = express.Router();


router.post('/', registerController.index);


module.exports = router;