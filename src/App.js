import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
          <p> props is immutable</p>
        </Greet>
        <Greet name="Clark" heroName="Superman" />
        <Greet name="Diana" heroName="Wonder woman" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder woman" /> */}
      </div>
    );
  }
}
export default App;
