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


const num_of_favourite_indicator = 0;
const num_of_patterns_indicator = 33;
const num_of_momemtum_indicator = 21;
const num_of_orderflow_indicator = 11;
const num_of_oscillators_indicator = 12;
const num_of_overlay_indicator = 1;

function Navbar(props){
    const [usingTool,setUsingTool] = useState(null);
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
                <i className="bi bi-search top-nav__icon-search"></i>
                <input
                type="text"
                value={props.company}
                onChange={props.handleChange}
                onKeyDown={props.handleSearch}
            />
              </div>
              {/* <div className="top-nav__chart">
                <h1>1D</h1>
              </div> */}
              <div className="top-nav__chart">
                <i className="bi bi-bar-chart-line top-nav__icon-chart"></i>
              </div>
              <div className="top-nav__drawing">
                <i className="bi bi-pencil top-nav__icon-drawing"></i>
              </div>
              <div className="top-nav__indicator"  onClick={() =>{if(usingTool===Tools.INDICATOR){setUsingTool(null); document.getElementById("indicator-arrow").style.transform = "rotateZ(0deg)";} else{
                setUsingTool(Tools.INDICATOR); document.getElementById("indicator-arrow").style.transform = "rotateZ(180deg)";}}}>
                <div className="top-nav__icons-indicator">
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
                      <li className="indicator__dropdown-favourite">
                        <div className="num_of_indicators">{num_of_favourite_indicator}</div>
                        <div>Favourite</div>
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
                <i className="bi bi-instagram"></i>
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
