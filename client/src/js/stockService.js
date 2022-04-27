const dataForge = require('data-forge');
var curDataFrame = null;
var timeRun = 0;
function requestData(code){
    console.log(`You are requesting a company ${code} stock history via requestData function service ${timeRun++}`);  
    const response = fetch("stock-history?symbol=" + code)
      .then(response => response.text())
      .then(response => {
        curDataFrame = dataForge.fromCSV(response)
        .where(row => row.timestamp)
        .parseDates("timestamp")
        .parseFloats(["open", "high", "low", "close", "volume"])
        .setIndex("timestamp")
        .reverse() // Data should be going forward
        .bake()
        ;
        return curDataFrame;
      })
    return response;
}
export function getStockData(company){
    const dataFrame = requestData(company)
    .catch(function (err) {
        console.error(err.stack || err);  
    });
    return dataFrame;
}