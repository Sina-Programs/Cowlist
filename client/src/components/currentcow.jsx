import React from "react";

function currentCow(props) {
  return (
    <div>
      <h4>Current Cow Name: {props.currentCow.cowName}</h4>
      <h4>Current Cow Description: {props.currentCow.cowDescription}</h4>
    </div>
  );
}

export default currentCow;
