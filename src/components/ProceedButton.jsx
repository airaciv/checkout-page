import React from "react";

function ProceedButton(props) {
  if (props.step === 1) {
    return <button onClick={props.onClick}>Continue to Payment</button>;
  } else if (props.step === 2) {
    return <button onClick={props.onClick}>Pay with e-Wallet</button>;
  } else {
    return "";
  }
}

export default ProceedButton;
