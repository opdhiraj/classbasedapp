import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState(
      (prevState) => ({ count: prevState.count + 1 }),
      () => console.log("callback value", this.state.count)
    );
  }
  render() {
    return (
      <>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </>
    );
  }
}

export default Counter;
