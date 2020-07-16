import React from "react";
import "./person.css";

const person = props => {
  const style = {
    backgroundColor: "blue"
  };
  return (
    <div>
      <h2 style={style} onClick={props.click}>
        My name is {props.name}
      </h2>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
      <h3>I am {props.age} years old</h3>
    </div>
  );
};

export default person;
