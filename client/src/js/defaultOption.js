export var defaultOption = {
    chart: {
        width : 320,
        height : 480
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
    }
};

export const priceOption = {
    type: 'candlestick',
    name: 'Price',
}

export const volumeOption = {
    type: 'column',
    name: 'Volume',
    yAxis: 1,
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