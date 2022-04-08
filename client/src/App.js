import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {requestData, initChart} from './js/chart.js'
import Navbar from './components/Navbar/Navbar.js'
class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        options : null,
        company : "MSFT",
        sma_period : 30,
        Window : {
          width :  800,
          height : 800
        },
        isLoading: false,
        error: null,
      }
      this.getStockData = this.getStockData.bind(this);
      this.updateDimensions = this.updateDimensions.bind(this);
    }
  getStockData() {
    var code = this.state.company;
    console.log('Loading ' + code);
    requestData(code)
      .then(dataFrame => initChart(dataFrame, this.state.Window))
      .then((options) => {

        console.log("before",this.state.options);
        this.setState((state)=>({
          options : options
        }));
        console.log("after",this.state.options);
      })
      .catch(function (err) {
          console.error(err.stack || err);  
      });
  }
  updateDimensions() {
      this.setState((state) => ({
        Window : {width : window.innerWidth, height : window.innerHeight-50}
      }))
  }
  componentDidMount(){
    window.addEventListener("resize", this.updateDimensions.bind(this));
    console.log(window);
    this.updateDimensions();
    this.getStockData();
  }
  componentWillMount(){
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  handleChange = (e) => {this.setState((state) => ({company : e.target.value}))}

  render(){
    return (
      <div className="App">
          <Navbar/>
          <div className="company_input">
            <button type="submit" onClick={this.getStockData}>Search</button>
            <input
              type="text"
              value={this.state.company}
              onChange={this.handleChange}
              onKeyDown={(e) => {
                if(e.key === 'Enter'){
                  this.getStockData();
                }
              }}
            />
          </div>
          
          <HighchartsReact 
            highcharts={Highcharts} 
            options={this.state.options} 
            constructorType={'stockChart'} 
            oneToOne={true}
          />
      </div>
    );
  }
}
export default App;
