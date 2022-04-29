export var defaultOption = {
    // spacing: null,
    chart: {
        borderWidth: 1,
        height: 800
    },
    title: {
        style: {
          color: "#A2A39C"
        },
        align: "center",
        text: ' Stock price history',
    },
    subtitle: {
        style: {
          color: "#A2A39C"
        },
        align: "center",
        text: 'A demo of Highstock using Data-Forge with data loaded from Alpha Vantage.',
    },
    legend: {
        align: "right",
        verticalAlign: "bottom",
        itemStyle: {
          fontWeight: "normal",
          color: "#A2A39C"
        }
    },
    yAxis: [{
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'Price'
            },
            height: '80%',
            resize: {
                lineWidth: 5,
                enabled : true
            },
        },{
            top: '80%',
            height: '20%',
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'Volume'
            },
    }],
    responsive: {
        rules: [{
          condition: {
            maxWidth: 800
          },
          chartOptions: {
            rangeSelector: {
              inputEnabled: false
            }
          }
        }]
    },
    pointPadding : 0.025
};
var groupingUnits = [[
    'week',
    [1]
], [
    'month',
    [1, 2, 3, 4, 6]
]]
export const priceOption = {
    type: 'candlestick',
    name: 'Price',
    // dataGrouping: {
    //     units: groupingUnits
    // }
}

export const volumeOption = {
    type: 'column',
    name: 'Volume',
    yAxis: 1,
    // dataGrouping: {
    //     units: groupingUnits
    // }
}

export const smaOption = {
    type: 'line',
    name: 'SMA',
    color: 'red',
    tooltip: {
        valueDecimals: 2
    }
}

export const emaOption = {
    type : 'line',
    name: 'EMA',
    color: 'blue',
    tooltip: {
        valueDecimals: 2
    }    
}

export const defaultSettingIndicator = {
    "SMA" : {
        smaPeriod : 30,
    },
    "EMA" : {
        emaPeriod : 30,
    }
}
