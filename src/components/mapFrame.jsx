import React, {Component} from 'react';
import {Element} from 'react-faux-dom';
import "./TimeSeries.css";
import * as d3 from "d3";
import * as Helper from "../assets/js/readData.js";
import * as Circle from "../assets/js/circle.js";

const svg_width = 1000;
const svg_height = 600;

const el = new Element('body')
var svgContainer = d3.select(el)
  .append("svg")
  .attr("width", svg_width)
  .attr("height", svg_height)
  .style("border", "1px solid #CCC")
  .style("background-color", '#F5F2EB')

//for the circles
var SAACmidX =  50 + 125 / 2;
var SAACmidY =  400 + 75 / 2;
var KLmidX =    300 + 75 / 2;
var KLmidY =    275 + 125 / 2;
var COBmidX =   300 + 75 / 2;
var COBmidY =   125 + 125 /2;
var SSBmidX =   250 + 125 / 2;
var SSBmidY =   25 + 75 / 2;
var SSMmidX =   400 + 125 / 2;
var SSMmidY =   25 + 75 / 2;
var SE1midX =   425 + 125 /2;
var SE1midY =   125 + 75 / 2;
var SE2midX =   575 + 125 / 2;
var SE2midY =   125 + 75 / 2;

class mapFrame extends Component {
  drawMap() {
    var kl = svgContainer.append("g");
    var cob = svgContainer.append("g");
    var se1 = svgContainer.append("g");
    var se2 = svgContainer.append("g");
    var ssb = svgContainer.append("g");
    var ssm = svgContainer.append("g");
    var saac = svgContainer.append("g");

    var tooltip = svgContainer.append("g");
    tooltip.append("div")
      .style('position', 'absolute')
      .style('background', '#f4f4f4')
      .style('padding', '5 15px')
      .style('border', '1px #333 solid')
      .style('border-radius', '5px')
      .style('opacity', '0')

    function handleMouseOver() {
      var building = d3.select(this);
      console.log('mouseover!');
    };

    function handleMouseOut() {
      console.log('mouseOut!');
      d3.select(this)
        .style('fill', 'lightblue');
    }

    saac.append('rect')
      .style('fill', 'lightblue')
      .attr('x', 50)
      .attr('y', 400)
      .attr('width', 125)
      .attr('height', 75)
      .on("mouseover", handleMouseOver)
      .on('mouseout', handleMouseOut);

    kl.append('rect')
      .style('fill', 'lightblue')
      .attr('x', 300)
      .attr('y', 275)
      .attr('width', 75)
      .attr('height', 125)
      .on("mouseover", handleMouseOver)
      .on('mouseout', handleMouseOut);

    cob.append('rect')
      .style('fill', 'lightblue')
      .attr('x', 300)
      .attr('y', 125)
      .attr('width', 75)
      .attr('height', 125)
      .on("mouseover", handleMouseOver)
      .on('mouseout', handleMouseOut);

    ssb.append('rect')
      .style('fill', 'lightblue')
      .attr('x', 250)
      .attr('y', 25)
      .attr('width', 125)
      .attr('height', 75)
      .on("mouseover", handleMouseOver)
      .on('mouseout', handleMouseOut);

    ssm.append('rect')
      .style('fill', 'lightblue')
      .attr('x', 400)
      .attr('y', 25)
      .attr('width', 125)
      .attr('height', 75)
      .on("mouseover", handleMouseOver)
      .on('mouseout', handleMouseOut);

    se1.append('rect')
      .style('fill', 'lightblue')
      .attr('id', 'SE1')
      .attr('x', 425)
      .attr('y', 125)
      .attr('width', 125)
      .attr('height', 75)
      .on("mouseover", handleMouseOver)
      .on('mouseout', handleMouseOut);

    se2.append('rect')
      .style('fill', 'lightblue')
      .attr('x', 575)
      .attr('y', 125)
      .attr('width', 125)
      .attr('height', 75)
      .on("mouseover", handleMouseOver)
      .on('mouseout', handleMouseOut);

    return el.toReact()
  }

  plotCircles(index) {
    var data = Helper.indicesOfPrevious24Hrs(index);

    var buildings = [data[2], data[3], data[4], data[5], data[6], data[7],
      data[8], data[9], data[10], data[11], data[12], data[13], data[14]];


    var scaleR = d3.scalePow()
      .domain([0,d3.max(buildings)])
      .range([0, 50])
      // .exponent([2])

    var klCircle = svgContainer.append("g");
    var cobCircle = svgContainer.append("g");
    var se1Circle = svgContainer.append("g");
    var se2Circle = svgContainer.append("g");
    var ssbCircle = svgContainer.append("g");
    var ssmCircle = svgContainer.append("g");
    var saacCircle = svgContainer.append("g");


    klCircle.append('circle')
      .style('fill', 'red')
      .attr('cx', KLmidX)
      .attr('cy', KLmidY)
      .attr('r', scaleR(data[2]));

    cobCircle.append('circle')
      .style('fill', 'red')
      .attr('cx', COBmidX)
      .attr('cy', COBmidY)
      .attr('r', scaleR(data[4]));

    se1Circle.append('circle')
      .style('fill', 'red')
      .attr('cx', SE1midX)
      .attr('cy', SE1midY)
      .attr('r', scaleR(data[6]));

    se2Circle.append('circle')
      .style('fill', 'red')
      .attr('cx', SE2midX)
      .attr('cy', SE2midY)
      .attr('r', scaleR(data[8]));

    ssbCircle.append('circle')
      .style('fill', 'red')
      .attr('cx', SSBmidX)
      .attr('cy', SSBmidY)
      .attr('r', scaleR(data[10]));

    ssmCircle.append('circle')
      .style('fill', 'red')
      .attr('cx', SSMmidX)
      .attr('cy', SSMmidY)
      .attr('r', scaleR(data[11]));

    saacCircle.append('circle')
      .style('fill', 'red')
      .attr('cx', SAACmidX)
      .attr('cy', SAACmidY)
      .attr('r', scaleR(data[13]));

    return el.toReact();
  }

  getTimeFromSlider() {
    console.log("HELLO WORLD!!");
    console.log(Circle.getPosition());
    var scaleLine = d3.scaleLinear()
      .domain([0,1000])
      .range([1483258500, 1514557800]);

    // console.log(scaleLine(circlePose));

    return 1514557800;
  }

  render() {
    return (
      <div>
        {this.drawMap()}
        {/* {this.plotCircles(1514557800)} */}
        {this.plotCircles(this.getTimeFromSlider())}
      </div>
    )
  }
}

export default mapFrame;
