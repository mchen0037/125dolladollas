import React, { Component } from 'react';
import mapFrame from './components/mapFrame';

//IMPORT SEMANTIC-UI
import {Container,Header, Divider, Grid} from "semantic-ui-react";

//IMPORT IMAGES
import campus from "./assets/img/campus.jpg";

//IMPORT COMPONENTS
import MapFrame from "./components/mapFrame";
import MenuEnergy from "./components/menuEnergy";

//IMPORT CSS
import "./assets/css/mapFrame.css";

class App extends Component {
  state = {
    campus : campus
  }
  render() {

    return (
      <React.Fragment>
        <br/>
        <div className = "columns">
            <div className = "column is-6 is-offset-1">
              <MapFrame campus = {this.state.campus}></MapFrame>
            </div>
            <div className = "columns is-3 is-offset-1">
                <MenuEnergy></MenuEnergy>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
