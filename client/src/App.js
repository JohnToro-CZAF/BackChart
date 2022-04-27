// Import important packages
import React, {useEffect, useState, useCallback} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

// Import resources
import './css/App.css';

// Utilities function importing
import {getStockData} from './js/stockService'
import useWindowSize from './js/windowSize';

// Import components
import Navbar from './components/Navbar/Navbar.js'
import LoginModal from './components/Login/LoginModal.js';
import { initChart } from './js/chartOptions';

function AppTest (){
    const [dataStock, setDataStock] = useState();
    const [chartOption, setChartOption] = useState({});
    const [company, setCompany] = useState("MSFT");
    const [renderingCompany, setRenderingComapny] = useState("MSFT");
    const [indicator, setIndicator] = useState({sma: {smaPeriod : 30, name: "SMA"}});
    const windowSize = useWindowSize();    

    useEffect(() => {
        const fetchData = async () => {
            const dataFrame = await getStockData(renderingCompany);
            setDataStock(dataFrame);
        }
        fetchData()
            // .catch(console.log("error at loading data"));
    }, [renderingCompany]);

    useEffect(() => {
        const reStruct = async () => {
            const option = initChart(dataStock, windowSize, indicator);
            setChartOption({...option}); 
        }
        reStruct()
            // .catch(console.log("error at useEffect"));
    }, [dataStock, indicator, windowSize])

    // Handle change in children components
    function handleChangeNameCompany(e){
        setCompany(e.target.value);
    } 
    function updateRenderingComapny(){
        setRenderingComapny(company);
    };
    return (
    <div className="App">
        {/* <LoginModal/> */}
        <Navbar company={company} handleChangeNameCompany={handleChangeNameCompany} setRenderingCompany={updateRenderingComapny}/>
        <HighchartsReact 
            highcharts={Highcharts} 
            options={chartOption} 
            constructorType={'stockChart'} 
            oneToOne={true}
        />
    </div>
    );
}

export default AppTest;
