var express = require('express');
const request = require('request-promise');
var router = express.Router();
var alphaVantageApiKey = "FXWNNVR4DDETBMUNFXWNNVR4DDETBMUN"; //fio:
/* GET [/stock-history] page. */
router.get('/', function (req, res, next) {
    console.log("took")
    var symbol = req.query.symbol;
    if (!symbol) {
        throw new Error("Symbol not specified.");
    }
  
    var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&apikey=' + alphaVantageApiKey + '&datatype=csv';
    request(url)
        .then(function (result) {
            res.type('text/csv');
            //console.log(url);
            res.send(result).end();
        })
        .catch(function (e) {
            console.error(e)
        }); 
});

module.exports = router;
