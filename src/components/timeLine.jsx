import React, { Component } from 'react';

class timeLine extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className = "line" onMouseDown = {this.props.circleOver}>
                    <div id = "circle1" className = "circle"></div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default timeLine;