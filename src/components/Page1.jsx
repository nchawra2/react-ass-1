import React, { Component } from "react";

import FuncComp from "./FuncComp";
import ClassComp from "./ClassComp";
import "./page1.css";

class Page1 extends Component {
  state = {
    classComp: false,
    funcComp: false,
  };

  changeFunc = () => {
    this.setState({
      funcComp: !this.state.funcComp,
    });
  };

  changeClass = () => {
    this.setState({
      classComp: !this.state.classComp,
    });
  };

  render() {
    return (
      <>
        <header>
          <div className="heading">
            Styling Using Functional and Class Component
          </div>
          <div className="btns">
            <div className="func btn" onClick={this.changeFunc}>
              To see Styling in function component
            </div>
            <div className="class btn" onClick={this.changeClass}>
              To see Styling in Class component
            </div>
          </div>
        </header>
        <div className="components">
          <div className="comps">{this.state.funcComp && <FuncComp />}</div>
          <div className="comps">{this.state.classComp && <ClassComp />}</div>
        </div>
      </>
    );
  }
}

export default Page1;
