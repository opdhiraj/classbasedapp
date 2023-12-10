import React from "react";

function ChildComp(props) {
  return (
    <>
      <h2>child component</h2>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      <button onClick={() => props.greetHandler("childName")}>
        Greet Parent passing parameter
      </button>
    </>
  );
}

export default ChildComp;
