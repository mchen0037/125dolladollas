import React, { Component } from 'react';


class  mapFrame extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <img src = {this.props.campus}/>
            </React.Fragment>
        );
    }
}
 
export default mapFrame;