import React, { Component } from 'react';
import mapFrame from './components/mapFrame';

//<TimeLine circleOver = {this.handleMouseMove} circleOut = {this.circleOut}/>
//IMPORT SEMANTIC-UI
import {Container,Header, Divider, Grid} from "semantic-ui-react";

//IMPORT JS FUNCTIONS
import {hello} from "./assets/js/readData.js";
import {circle} from "./assets/js/circle.js";
import {checkCircle} from "./assets/js/circle.js";
import {circleOut} from "./assets/js/circle.js";
import {search} from "./assets/js/search.js";

//IMPORT IMAGES
import campus from "./assets/img/campus.jpg";

//IMPORT COMPONENTS
import MapFrame from "./components/mapFrame";
import MenuEnergy from "./components/menuEnergy";
import TimeLine from "./components/timeLine";
import Search from "./components/search";

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

  //handle circle clicked
  handleCircleClicked =() =>{
    checkCircle();
  }

  //handleProcessSearch
  handleProcessS(date, hour){
    search(date, hour);
  }
  /*handleOnCircleOut = () =>{
    circleOut();
  }*/

  render() {

    return (
      <React.Fragment>
        <br/>
        
        <div className = "columns">
            <div className = "column is-7">
              <h1 className = "title">CHW/HW Used In The Past 24 Hours</h1>
              <MapFrame campus = {this.state.campus}></MapFrame>
              <br/>
              <Search/>
            </div>
            <div className = "columns is-3 is-offset-1">
            <span className = "button is-primary"onClick = {this.handleData}>TEST</span>
                <MenuEnergy/>
            </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
