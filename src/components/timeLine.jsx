import React, { Component } from 'react';

class timeLine extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div onMouseDown = {this.props.circleOver}  className = "line">
                    <div id = "circle1" className = "circle"></div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default timeLine;