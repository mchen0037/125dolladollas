import React, {Component} from 'react';
import {Element} from 'react-faux-dom';
import "./TimeSeries.css";
import "../assets/js/readData.js";
import * as d3 from "d3";

const svg_width = 800;
const svg_height = 500;

const el = new Element('body')
var svgContainer = d3.select(el)
  .append("svg")
  .attr("width", svg_width)
  .attr("height", svg_height)
  .style("border", "1px solid #CCC")
  .style("background-color", '#F5F2EB')

class TimeSeries extends Component {
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
      .style('fill', 'blue')
      .attr('x', 575)
      .attr('y', 125)
      .attr('width', 125)
      .attr('height', 75)
      .on("mouseover", handleMouseOver)
      .on('mouseout', handleMouseOut);

    return el.toReact()
  }



  render() {
    return (
      <div>
        {this.drawMap()}
        hi
        {this.readData.hello()}
      </div>
    )
  }
}

export default TimeSeries;
