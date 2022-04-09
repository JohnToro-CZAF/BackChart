import React, {useState} from "react";
import './Navbar.css';

//ENUM FOR TOOLS
const Tools = {
  SEARCH: 1,
  INTERVAL: 2,
  CHART: 3,
  DRAWING: 4,
  INDICATOR: 5,
  SHARING: 6,
  MAGNET: 7,
  PLAY: 8,
  SETTING: 9,
  LAYER: 10,
  WIDGET: 11,
  PANEL: 12
};
Object.freeze(Tools);
const IndicatorDropDown = {
  FAVOURITE: 1,
  PATTERNS: 2,
  MOMENTUM: 3,
  ORDERFLOW: 4,
  OSCILLATOR: 5,
  OVERLAY: 6,
};
Object.freeze(IndicatorDropDown);
const num_of_favourite_indicator = 0;
const num_of_patterns_indicator = 33;
const num_of_momemtum_indicator = 21;
const num_of_orderflow_indicator = 11;
const num_of_oscillators_indicator = 12;
const num_of_overlay_indicator = 1;
const favouriteIndicators = ["TBC","HDF","AGH","ODG"]
function Navbar(props){
    const [usingTool,setUsingTool] = useState(null);
    const [indicatorDropDown,setIndicatorDropDown] = useState(null);
    return(
        <div className="top-nav">
            <div className="top-nav__chart-tools">
              <div className="top-nav__user">
                <i className="bi bi-person-circle top-nav__icon-user"></i>
                <div className="top-nav__user--hover">
                  <p>Login to BackChart</p>
                </div>
              </div>
              <div className="top-nav__search">
                <i className="bi bi-search top-nav__icon-search" onClick={() => {props.setRenderingCompany();}}></i>
                <input
                type="text"
                value={props.company}
                onChange={props.handleChangeNameCompany}
                onKeyDown={(e) => {if(e.key==="Enter"){ props.setRenderingCompany(); }}}
            />
              </div>
              {/* <div className="top-nav__chart">
                <h1>1D</h1>
              </div> */}
              <div className="top-nav__chart">
                <div className="top-nav__icons-chart" onClick={() =>{if(usingTool===Tools.CHART){setUsingTool(null); document.getElementById("chart-arrow").style.transform = "rotateZ(0deg)";} else{
                  setUsingTool(Tools.CHART); document.getElementById("chart-arrow").style.transform = "rotateZ(180deg)";}}}>
                  <i className="bi bi-bar-chart-line top-nav__icon-chart"></i>
                  <div className="container-arrow">
                    <i className="bi bi-caret-down top-nav__icon-chart-arrow" id="chart-arrow"></i>
                  </div>
                </div>
              </div>
              <div className="top-nav__drawing">
                <i className="bi bi-pencil top-nav__icon-drawing"></i>
              </div>
              <div className="top-nav__indicator">
                <div className="top-nav__icons-indicator" onClick={() =>{if(usingTool===Tools.INDICATOR){setUsingTool(null); document.getElementById("indicator-arrow").style.transform = "rotateZ(0deg)";} else{
                setUsingTool(Tools.INDICATOR); document.getElementById("indicator-arrow").style.transform = "rotateZ(180deg)";}}}>
                  <i className="bi bi-activity top-nav__icon-indicator"></i>
                  <div className="container-arrow">
                    <i className="bi bi-caret-down top-nav__icon-indicator-arrow" id="indicator-arrow"></i>
                  </div>
                </div>
                {usingTool===Tools.INDICATOR &&
                  <div className="indicator__dropdown">
                    <div className="indicator__dropdown-search">
                      <i className="bi bi-search indicator__dropdown-icon-search"></i>
                      <input type="text"></input>
                    </div>
                    <ul className="indicator__dropdown-list">
                      <li className="indicator__dropdown-favourite"  onMouseEnter={()=>{setIndicatorDropDown(IndicatorDropDown.FAVOURITE)}} onMouseLeave={()=>{setIndicatorDropDown(null)}} >
                        <div className="num_of_indicators">{num_of_favourite_indicator}</div>
                        <div>Favourite</div>
                        {indicatorDropDown===IndicatorDropDown.FAVOURITE && 
                          <div className="indicator-dropdown-favourite-hover">
                            <ul className="indicator__dropdown-favourite-list"> 
                              {favouriteIndicators.map((indicator,key) => {
                                return <li key={key}>{indicator}</li>;
                              })}
                            </ul>
                          </div>
                        }
                      </li>
                      <li className="indicator__dropdown-patterns">
                        <div className="num_of_indicators">{num_of_patterns_indicator}</div>
                        <div>Pattern</div>
                      </li>
                      <li className="indicator__dropdown-momemtum">
                        <div className="num_of_indicators">{num_of_momemtum_indicator}</div>
                        <div>Momentum</div>
                      </li>
                      <li className="indicator__dropdown-orderflow">
                        <div className="num_of_indicators">{num_of_orderflow_indicator}</div>
                        <div>Orderflow</div>
                      </li>
                      <li className="indicator__dropdown-oscillators">
                        <div className="num_of_indicators">{num_of_oscillators_indicator}</div>
                        <div>Oscillators</div>
                      </li>
                      <li className="indicator__dropdown-overlay">
                        <div className="num_of_indicators">{num_of_overlay_indicator}</div>
                        <div>Overlay</div>
                      </li>
                    </ul>
                  </div>
                }
              </div>
              <div className="top-nav__sharing">
                <i className="bi bi-instagram top-nav__icon-sharing"></i>
              </div>
              <div className="top-nav__magnet">
                <i className="bi bi-magnet top-nav__icon-magnet"></i>
              </div>
              <div className="top-nav__replay">
                <i className="bi bi-play-circle top-nav__icon-replay"></i>
              </div>
            </div>
            <div className="top-nav__sell-buy">
              <div className="top-nav__sell-buy__button">
                <button className="btn--buy">Buy</button>
                <button className="btn--sell">Sell</button>
              </div>
              <div className="top-nav__settings">
                <i className="bi bi-gear top-nav__icon-settings"></i>
              </div>
              <div className="top-nav__layers">
                <i className="bi bi-stack top-nav__icon-user-layers"></i>
              </div>
              <div className="top-nav__widgets">
                <i className="bi bi-three-dots-vertical top-nav__icon-widgets"></i>
              </div>
              <div className="top-nav__panel">
                <i className="bi bi-list top-nav__icon-panel"></i>
              </div>
            </div>
        </div>
    )
}

export default Navbar;
