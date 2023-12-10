import React, { Component } from "react";
import ChildComp from "./ChildComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent component",
      pAdd: "test Add",
    };
  }
  greetParent = (childname) => {
    alert(
      `Hello ${this.state.parentName} ====> ${this.state.pAdd} from ${childname}`
    );
  };
  render() {
    return (
      <>
        <h1>{this.state.parentName}</h1>
        <ChildComp greetHandler={this.greetParent} />
      </>
    );
  }
}

export default ParentComp;
