import React, { Component } from 'react';
import mapFrame from './components/mapFrame';

//IMPORT SEMANTIC-UI
import {Container,Header, Divider, Grid} from "semantic-ui-react";

//IMPORT JS FUNCTIONS
import {hello} from "./assets/js/readData.js";
import {circle} from "./assets/js/circle.js";

//IMPORT IMAGES
import campus from "./assets/img/campus.jpg";

//IMPORT COMPONENTS
import MapFrame from "./components/mapFrame";
import MenuEnergy from "./components/menuEnergy";
import TimeLine from "./components/timeLine";

//IMPORT CSS
import "./assets/css/mapFrame.css";
import "./assets/css/timeLine.css";

class App extends Component {
  state = {
    campus : campus
  }

  //handle printing of data
  handleData(){
    console.log("hello there");
    hello();
  }

  //handle mouse move
  handleMouseMove = (position) =>{
    circle(position);
  }

  render() {

    return (
      <React.Fragment>
        <br/>
        <div className = "columns">
            <div className = "column is-7">
              <MapFrame campus = {this.state.campus}></MapFrame>
              <br/>
              <TimeLine circleOver = {this.handleMouseMove}/>
            </div>
            <div className = "columns is-3 is-offset-1">
            <span className = "button is-primary"onClick = {this.handleData}>TEST</span>
                <MenuEnergy></MenuEnergy>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
