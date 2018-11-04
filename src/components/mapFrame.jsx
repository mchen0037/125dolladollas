import React, { Component } from 'react';

import {Icon} from "semantic-ui-react";

class  mapFrame extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <img className = "frame1" src = {this.props.campus}/>
            </React.Fragment>
        );
    }
}
 
export default mapFrame;