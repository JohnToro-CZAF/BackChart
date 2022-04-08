import {computeSmaSeries, dataFrameToHighstockOHLC, seriesToHighstock} from './utilities.js'
const dataForge = require('data-forge');
var curDataFrame = null;
var smaPeriod = 30;


export function requestData(code){
    const response = fetch("stock-history?symbol=" + code)
      .then(response => response.text())
      .then(response => {
        console.log(code, response);
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
export function initChart (dataFrame, window) {

    var price = dataFrameToHighstockOHLC(dataFrame);
    var volume = seriesToHighstock(dataFrame.getSeries("volume"));
    var sma = computeSmaSeries(dataFrame.getSeries("close"), smaPeriod);
    console.log(sma);
    var chartOptions =
    {
        chart: {
            width : window.width,
            height : window.height-50
        },

        title: {
            text: ' Stock price history',
        },

        subtitle: {
            text: 'A demo of Highstock using Data-Forge with data loaded from Alpha Vantage.',
        },

        xAxis: {
        },

        yAxis: [
            {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'Price'
                },
                height: '60%',
                lineWidth: 2
            }, 
            {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'Volume'
                },
                top: '65%',
                height: '35%',
                offset: 0,
                lineWidth: 2
            }
        ],

        series: [
            {
                type: 'candlestick',
                name: 'Price',
                data: price,
            },
            {
                type: 'line',
                name: 'SMA',
                color: 'red',
                data: sma,
                tooltip: {
                    valueDecimals: 2
                }
            },
            {
                type: 'column',
                name: 'Volume',
                data: volume,
                yAxis: 1,
            }
        ]
    };
    return chartOptions;
}