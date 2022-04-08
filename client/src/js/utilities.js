export function computeSmaSeries(series, period) {
    var output = [];
    var pairs = series.rollingWindow(period)
    for(const window of pairs){
        // console.log(window);
        output.push([window.getIndex().last().getTime(), window.average()]);
    }
    return output;
};

export function dataFrameToHighstockOHLC(dataFrame) {
    var output = [];
    for(const row of dataFrame){
        // console.log(row.timestamp.getTime());
        output.push([
            row.timestamp.getTime(),
            row.open,
            row.high,
            row.low,
            row.close,
        ]);
    }
    return output;
};
export function seriesToHighstock(series) {
    var output = [];
    const pairs = series.toPairs();
    for(const pair of pairs){
        output.push([pair[0].getTime(),pair[1]]);
    }
    return output;
};