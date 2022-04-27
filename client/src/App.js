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
function AppTest (){
    const [stockData, setStockData] = useState({options : null});
    const [company, setCompany] = useState("MSFT");
    const [renderingCompany, setRenderingComapny] = useState("MSFT");
    const [indicator, setIndicator] = useState([{sma_period : 30}]);
    const windowSize = useWindowSize();    
    useEffect(() => {
        const fetchData = async () => {
            const option = await getStockData(renderingCompany, windowSize);
            setStockData({options : option});
        }
        fetchData()
            .catch(console.log("error"));
    }, [renderingCompany, windowSize]);
    function cac(e){
        console.log(e);
    }
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
            options={stockData.options} 
            constructorType={'stockChart'} 
            oneToOne={true}
        />
    </div>
    );
}

export default AppTest;
