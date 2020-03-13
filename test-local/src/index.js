import React, { Component } from "react";
import ReactDOM from "react-dom";

import {SimpleComponent, IconGallery, IconList} from 'czpack';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  
  render() {
    return (
      <div>
        <br/><br/><IconGallery color="black" size={35}/> => Icon Gallery
        <br/><br/><IconGallery color="red" size={35}/> => Icon Gallery
        <br/><br/><IconList color="black"  size={35}/> => Icon List
        <br/><br/><IconList color="red"  size={35}/> => Icon List
      </div>
      
    );
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;