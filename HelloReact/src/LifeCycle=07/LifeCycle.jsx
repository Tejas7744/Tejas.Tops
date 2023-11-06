import React, { Component } from "react";
// import Unmount from "./Unmount";
export default class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      Count: 0,
    };
  }

  componentDidMount() {
    console.log("=======componentDidMount=======>>>>");
  }
  componentDidUpdate(oldProps, oldState) {
    if (this.state.Count === oldState.Count) {
      alert("both are same");
    }
    console.log("=======componentDidUpdatet=======>>>>");
  }

  render() {
    console.log("=======Render========>");
    return (
      <div>
        <h1>LifeCycle</h1>
        <h1>Count is {this.state.Count}</h1>
        <button
          className="danger"
          onClick={() => this.setState({ Count: this.state.Count + 1 })}
        >
          Increment
        </button>
        <button
          className="danger"
          onClick={() => this.setState({ Count: this.state.Count })}
        >
          Increment Same
        </button>

        {this.state.Count < 10 && <Unmount />}
        {/* <Unmount /> */}
      </div>
    );
  }
}
