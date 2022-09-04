import React from "react";

function BackButton(props) {
  if (props.step === 1) {
    return (
      <div>
        <i className="fa-solid fa-arrow-left"></i>
        <span> Back to cart</span>
      </div>
    );
  } else if (props.step === 2) {
    return (
      <div>
        <i className="fa-solid fa-arrow-left"></i>
        <span> Back to delivery</span>
      </div>
    );
  } else {
    return "";
  }
}

export default BackButton;
