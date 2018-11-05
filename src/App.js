import React, { Component } from 'react';
import mapFrame from './components/mapFrame';
import * as d3 from "d3";

//<TimeLine circleOver = {this.handleMouseMove} circleOut = {this.circleOut}/>
//IMPORT SEMANTIC-UI
import {Container,Header, Divider, Grid} from "semantic-ui-react";

//IMPORT JS FUNCTIONS
import {hello} from "./assets/js/readData.js";
import {circle} from "./assets/js/circle.js";
import {checkCircle} from "./assets/js/circle.js";
import {circleOut} from "./assets/js/circle.js";
import {search} from "./assets/js/search.js";
import {getPosition} from "./assets/js/circle.js";

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

  changeSlider(number) {
    this.setState({positionOfSlider: number});

  }

  getTimeFromSlider = () => {
    var scaleLine = d3.scaleLinear()
      .domain([0,1000])
      .range([1483258500, 1514557800]);

    this.changeSlider(scaleLine(getPosition()));
    console.log(this.state.positionOfSlider);
    // this.state = {
    //   positionOfSlider: scaleLine(getPosition())
    // };
  }

  constructor(props) {
    super(props);
    this.state = {
      positionOfSlider: 37.0
    };
  }


  render() {

    return (
      <React.Fragment>
        <br/>

        <div className = "columns">
            <div className = "column is-7">
              <h1 className = "title">CHW/HW Used In The Past 24 Hours (but just HW for now)</h1>
              <MapFrame campus={this.state.campus} time={this.state.positionOfSlider}></MapFrame>
              <br/>
              <TimeLine getTimeFromSlider = {this.getTimeFromSlider} circleOver = {this.handleMouseMove}/>
              <Search/>
            </div>
            <div className = "columns is-3 is-offset-1">
                <MenuEnergy/>
            </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
