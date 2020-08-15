import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Calc from "./Calc";
import Advice from "./Advice";
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>BMI Index and Calculator</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Calc">Calculator</NavLink></li>
            <li><NavLink to="/Advice">BMI Advice</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Calc" component={Calc}/>
            <Route path="/Advice" component={Advice}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;