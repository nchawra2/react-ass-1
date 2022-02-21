import React, { Component } from "react";
import './classComp.css'

export class ClassComp extends Component {
  render() {
    return (
      <div className="comp2">
        <h1>This is created using Class Component</h1>
        <p>This is using external CSS</p>
        <p style={{ color: "blue" }}>This is using inline CSS</p>
      </div>
    );
  }
}

export default ClassComp;
