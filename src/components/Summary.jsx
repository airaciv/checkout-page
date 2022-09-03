import React from "react";
import styled from "styled-components";

const SummaryContainer = styled.div`
  flex: 1 1 30%;
  margin: 5rem 2rem;
  padding: 0 2rem;
  border-left: 1px solid RGBA(255, 138, 0, 0.2);
  button {
    background-color: #ff8a00;
    border: none;
    color: #ffffff;
    font-size: 1rem;
    padding: 1rem;
    width: 100%;
  }
  @media (max-width: 1100px) {
    flex: 1 1 100%;
    border: none;
    margin-top: 5rem;
  }
`;

const ChosenOptions = styled.p`
  color: #1bd97b;
  font-weight: 700;
`;

const TotalSummary = styled.div`
  margin-top: 5rem;
`;

const Cost = styled.div`
  display: flex;
  p {
    margin: 0.5rem 0;
  }

  p:last-child,
  h2:last-child {
    font-weight: 700;
    margin-left: auto;
  }
`;

function Summary(props) {
  return (
    <SummaryContainer>
      {/* Details Summary */}
      <h2>Summary</h2>
      <p>10 items purchased</p>
      <hr />
      <p>Delivery estimation</p>
      <ChosenOptions>today by GO-SEND</ChosenOptions>
      <hr />
      <p>Payment method</p>
      <ChosenOptions>Bank Transfer</ChosenOptions>

      {/* Total Summary */}
      <TotalSummary>
        <Cost>
          <p>Cost of goods</p>
          <p>500,000</p>
        </Cost>
        <Cost>
          <p>Dropshipping Fee</p>
          <p>5,900</p>
        </Cost>
        <Cost>
          <p>
            <strong>GO-SEND </strong>shipment
          </p>
          <p>15,000</p>
        </Cost>
        <Cost>
          <h2>Total</h2>
          <h2>505,900</h2>
        </Cost>
      </TotalSummary>

      <button onClick={props.onClick}>Continue to Payment</button>
    </SummaryContainer>
  );
}

export default Summary;
