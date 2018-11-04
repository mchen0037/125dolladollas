import React, { Component } from 'react';
import mapFrame from './components/mapFrame';

//IMPORT SEMANTIC-UI
import {Container,Header, Divider, Grid} from "semantic-ui-react";

//IMPORT JS FUNCTIONS
import {hello} from "./assets/js/readData.js";

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

  handleData(){
    console.log("hello there");
    hello();
  }

  render() {

    return (
      <React.Fragment>
        <br/>
        <div className = "columns">
            <div className = "column is-6 is-offset-1">
              <MapFrame campus = {this.state.campus}></MapFrame>
              <TimeLine/>
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
