var express = require('express');
const stockController = require('../app/controllers/StockController')
var router = express.Router();

router.get('/', stockController.get_data);

module.exports = router;
