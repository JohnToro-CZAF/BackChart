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

function AppTest (){
    const [stockData, setStockData] = useState({options : null});
    const [company, setCompany] = useState("MSFT");
    const [searchCompany, setSearchComapny] = useState("MSFT");
    const [indicator, setIndicator] = useState([{sma_period : 30}]);
    const windowSize = useWindowSize();    

    useEffect(() => {
        const fetchData = async () => {
            const option = await getStockData(searchCompany, windowSize);
            setStockData({options : option});
        }
        fetchData()
            .catch(console.log("error"));
    }, [searchCompany, windowSize]);

    // Handle change in children components
    const handleChange = (e) => {setCompany(e.target.value)};
    const handleSearch = (e) => {
        if(e.key === 'Enter'){
            setSearchComapny(company);
        }
    }
    return (
    <div className="App">
        <Navbar company={company} handleChange={handleChange} handleSearch={handleSearch}/>
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
