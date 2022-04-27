import {computeSmaSeries, dataFrameToHighstockOHLC, seriesToHighstock, computeEmaSeries} from './utilities.js'
import { defaultOption, smaOption, volumeOption, priceOption, emaOption} from './defaultOption.js';

export function initChart (dataFrame, window, indicator) {
    var price = dataFrameToHighstockOHLC(dataFrame);
    var volume = seriesToHighstock(dataFrame.getSeries("volume"));
    var chartOptions = Object.assign({}, defaultOption);

    chartOptions.chart = window;
    chartOptions.series = [];
    chartOptions.series.push({...priceOption, data:price});
    chartOptions.series.push({...volumeOption, data:volume});

    if(indicator.length >= 7){
        console.log("You are not allowed to have more than 7 indicators on the same chart");
        return;
    }
    Object.entries(indicator).forEach(([k,v]) => {
        switch(k){
            case "SMA":
                var sma = computeSmaSeries(dataFrame.getSeries("close"), v.smaPeriod);
                chartOptions.series.push({...smaOption, data:sma});
                break;
            case "EMA":
                var ema = computeEmaSeries(dataFrame.getSeries("close"), v.emaPeriod);
                chartOptions.series.push({...emaOption, data:ema});
                break;
            default:
        }
    })
    return chartOptions;
}
