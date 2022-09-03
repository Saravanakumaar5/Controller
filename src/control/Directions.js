import React, { Component } from "react";
import "./directions.css";

class Directions extends Component {
  constructor() {
    super();
    this.state = {
      message: "START",
    };
    console.log("START");
  }

  changemessage1() {
    this.setState({
      message: "FRONT",
    });
    console.log("FRONT");
  }
  changemessage2() {
    this.setState({
      message: "RIGHT",
    });
    console.log("RIGHT");
  }
  changemessage3() {
    this.setState({
      message: " BACK",
    });
    console.log("BACK");
  }
  changemessage4() {
    this.setState({
      message: " LEFT",
    });
    console.log("LEFT");
  }

  render() {
    return (
      <div class="grid-container">
        <div class="grid-item"></div>
        <div class="grid-item">
          <button onClick={() => this.changemessage1()}>Front</button>
        </div>
        <div class="grid-item"></div>
        <div class="grid-item">
          <button onClick={() => this.changemessage4()}>Left</button>
        </div>
        <div class="grid-item">
          <h1>{this.state.message}</h1>
        </div>
        <div class="grid-item">
          <button onClick={() => this.changemessage2()}>Right</button>
        </div>
        <div class="grid-item"></div>
        <div class="grid-item">
          <button onClick={() => this.changemessage3()}>Back</button>
        </div>
        <div class="grid-item"></div>
      </div>
    );
  }
}

export default Directions;
