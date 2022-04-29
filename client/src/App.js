// Import important packages
import React, {useEffect, useState} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import dragPanes from "highcharts/modules/drag-panes";
// Import resources
import './css/App.css';

// Utilities function importing
import {getStockData} from './js/stockService'
import {useWindowSize} from './js/componentUti';
import { defaultSettingIndicator } from './js/defaultOption';

// Import components
import Navbar from './components/Navbar/Navbar.js'
import LoginModal from './components/Login/LoginModal.js';
import { initChart } from './js/chartOptions';

dragPanes(Highcharts);

function AppTest (){
    const [dataStock, setDataStock] = useState();
    const [chartOption, setChartOption] = useState(null);
    const [company, setCompany] = useState("MSFT");
    const [renderingCompany, setRenderingComapny] = useState("MSFT");
    const [indicator, setIndicator] = useState({"SMA": {smaPeriod : 30}});
    const windowSize = useWindowSize();    

    useEffect(() => {
        const fetchData = async () => {
            const dataFrame = await getStockData(renderingCompany);
            setDataStock(dataFrame);
        }
        fetchData()
    }, [renderingCompany]);

    useEffect(() => {
        const reStruct = async () => {
            const option = initChart(dataStock, windowSize, indicator);
            setChartOption(option); 
        }
        reStruct()
    }, [dataStock, indicator, windowSize])

    // Handle change in children components
    function handleChangeNameCompany(e){
        setCompany(e.target.value);
    } 
    function updateRenderingComapny(){
        setRenderingComapny(company);
    };
    function handleChangeIndicator(id){
        indicator[id] = defaultSettingIndicator[id];
        setIndicator({...indicator});
    }

    return (
    <div className="App">
        {/* <LoginModal/> */}
        <Navbar company={company} 
            handleChangeNameCompany={handleChangeNameCompany} 
            setRenderingCompany={updateRenderingComapny}
            handleChangeIndicator={handleChangeIndicator}
        />
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
