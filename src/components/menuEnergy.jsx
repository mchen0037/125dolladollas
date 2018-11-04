import React, { Component } from 'react';
import {Icon} from "semantic-ui-react";

class menuEnergy extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className = "box">
                    <h1 className = "title">Total Energy Used in Selection</h1>
                    <hr/>
                    <p className = "menu1"><Icon className = "iconColor1" name = "life ring outline"/><span id = "less1">HW</span></p>
                    <br/>
                    <p className = "menu1"><Icon className = "iconColor2" name = "life ring outline"/><span id = "less1">CHW</span></p>
                </div>
            </React.Fragment>
          );
    }
}
 
export default menuEnergy;