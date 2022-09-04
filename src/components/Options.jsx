import React from "react";
import styled from "styled-components";

const AvailableOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  button {
    background-color: #ffffff;
    border: 1px solid #cccccc;
    flex: 0 1 200px;
    margin: 0 1rem 1rem 0;
    padding: 0.5rem;
    text-align: left;
  }
`;

function Options() {
  const deliveryOptions = [
    { name: "GO-SEND", shipmentFee: 15000 },
    { name: "JNE", shipmentFee: 9000 },
    { name: "Personal Courier", shipmentFee: 29000 },
  ];

  function handleClick(event) {
    event.preventDefault();
    localStorage.setItem("shipment", event.target.value);
  }

  return (
    <div>
      <h1>Shipment</h1>
      <form>
        <AvailableOptions>
          {deliveryOptions.map((option) => {
            return (
              <button name="name" value={option.name} onClick={handleClick}>
                {option.name}
                <br></br>
                <strong>{option.shipmentFee}</strong>
              </button>
            );
          })}
        </AvailableOptions>
      </form>

      <h1>Payment</h1>
      <AvailableOptions>
        <button name="payment" value="e-Wallet">
          e-Wallet<br></br>
          <strong>1,500,000 left</strong>
        </button>
        <button name="payment" value="Bank Transfer">
          Bank Transfer
        </button>
        <button name="payment" value="Virtual Account">
          Virtual Account
        </button>
      </AvailableOptions>
    </div>
  );
}

export default Options;
