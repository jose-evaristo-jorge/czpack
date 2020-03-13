import React, { Component } from "react";
import ReactDOM from "react-dom";

import {IconGallery, IconList} from 'czpack';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  
  render() {
    return (

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
      >
        <h3>Test component imported from NPM</h3>
        <IconGallery size={45}  color="grey"/>
        <IconList    size={45}  color="black"/>
        <IconGallery size={45}  color="grey"/>
        <IconList    size={45}  color="black"/>
        <IconGallery size={45}  color="red"/>
        <IconList    size={45}  color="red"/>
      </div>
    );
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;