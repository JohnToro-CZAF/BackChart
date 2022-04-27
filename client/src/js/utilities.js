export function computeSmaSeries(series, period) {
    var output = [];
    var pairs = series.rollingWindow(period)
    for(const window of pairs){
        output.push([window.getIndex().last().getTime(), window.average()]);
    }
    return output;
};
export function computeEmaSeries(series, period){
    var output = [];
    var pairs = series.toPairs();
    var N = pairs.length;
    const k = 2/(period+1);
    output[0] = [pairs[0][0].getTime(), pairs[0][1]];
    for(let i = 1; i < N; i++){
        console.log(pairs[i]);
        let newPoint = [pairs[i][0].getTime(), (pairs[i][1]*k)+output[i-1][1]*(1-k)]
        output.push(newPoint);
    }
    return output;
}

export function dataFrameToHighstockOHLC(dataFrame) {
    var output = [];
    for(const row of dataFrame){
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