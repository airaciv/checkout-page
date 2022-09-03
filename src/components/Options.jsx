import React from "react";
import styled from "styled-components";

const AvailableOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  button {
    background-color: #ffffff;
    border: 1px solid #cccccc;
    color: #cccccc;
    flex: 0 1 200px;
    margin: 0 1rem 1rem 0;
    padding: 0.5rem;
    text-align: left;
  }
`;

function Options() {
  return (
    <div>
      <h1>Shipment</h1>
      <AvailableOptions>
        <button>
          GO-SEND<br></br>
          <strong>15,000</strong>
        </button>
        <button>
          JNE<br></br>
          <strong>9,000</strong>
        </button>
        <button>
          Personal Courier<br></br>
          <strong>29,000</strong>
        </button>
      </AvailableOptions>

      <h1>Payment</h1>
      <AvailableOptions>
        <button>
          e-Wallet<br></br>
          <strong>1,500,000 left</strong>
        </button>
        <button>Bank Transfer</button>
        <button>Virtual Account</button>
      </AvailableOptions>
    </div>
  );
}

export default Options;
