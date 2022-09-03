import React from "react";

function Finish() {
  return (
    <div className="thankyou">
      <h1>Thank you</h1>
      <p>
        <strong>Order ID: XXKYB</strong>
      </p>
      <p>Your order will be delivered today with GO-SEND</p>
      <div className="back-to-homepage">
        <i className="fa-solid fa-arrow-left"></i>
        <a href="http://"> Go to homepage</a>
      </div>
    </div>
  );
}

export default Finish;
