import React from "react";

function cow(props) {
  console.log(props.cow);
  return (
    <div
      onClick={() => {
        props.selectCurrent(props.cow);
      }}
    >
      <img src={props.cow.cowUrl} />
      <div>Cow ID: {props.cow.id}</div>
      <div>Cow Name: {props.cow.cowName}</div>
      <div>Cow Description: {props.cow.cowDescription}</div>
      <br />
    </div>
  );
}

export default cow;
