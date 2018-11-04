import React, { Component } from 'react';
import mapFrame from './components/mapFrame';

//IMPORT SEMANTIC-UI
import {Container,Header, Divider, Grid} from "semantic-ui-react";

//IMPORT IMAGES
import campus from "./assets/img/campus.jpg";

//IMPORT COMPONENTS
import MapFrame from "./components/mapFrame";

class App extends Component {
  state = {
    campus : campus
  }
  render() {

    return (
      <React.Fragment>
        <Container>
          <MapFrame campus = {this.state.campus}></MapFrame>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
