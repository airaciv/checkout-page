import React from "react";

function Summary(props) {
  return (
    <div className="summary-container">
      {/* Details Summary */}
      <h2>Summary</h2>
      <p>10 items purchased</p>
      <hr />
      <p>Delivery estimation</p>
      <p className="chosen-options">today by GO-SEND</p>
      <hr />
      <p>Payment method</p>
      <p className="chosen-options">Bank Transfer</p>

      {/* Total Summary */}
      <div className="total-summary">
        <div className="cost">
          <p>Cost of goods</p>
          <p>500,000</p>
        </div>
        <div className="cost">
          <p>Dropshipping Fee</p>
          <p>5,900</p>
        </div>
        <div className="cost">
          <p>
            <strong>GO-SEND </strong>shipment
          </p>
          <p>15,000</p>
        </div>
        <div className="cost">
          <h2>Total</h2>
          <h2>505,900</h2>
        </div>
      </div>

      <button onClick={props.onClick}>Continue to Payment</button>
    </div>
  );
}

export default Summary;
