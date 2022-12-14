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

function Summary({ step, deliveryOptions, useFormReturn, ...restProps }) {
  const { watch } = useFormReturn;
  const watchIsDropship = watch("isDropship");
  const watchCurrentShipment = watch("shipmentName");
  const watchCurrentPayment = watch("paymentName");
  const watchDeliveryEstimate = watch("shipmentEstimate");
  const watchShipmentFee = watch("shipmentFee");

  const cost = {
    costOfGood: 500000,
    dropshippingFee: watchIsDropship ? 5900 : 0,
    deliveryFee: watchCurrentShipment ? watchShipmentFee : 0,
  };

  // Generate proceed button based on step number
  let proceedButton = null;
  if (step <= 1) {
    proceedButton = "Continue to Payment";
  } else if (step === 2) {
    proceedButton = "Pay with " + watchCurrentPayment;
  }

  return (
    <SummaryContainer>
      {/* Details Summary */}
      <h2>Summary</h2>
      <p>10 items purchased</p>

      {/* Appears in summary only when shipment option is clicked */}
      {watchCurrentShipment && (
        <>
          <hr />
          <p>Delivery estimation</p>
          <ChosenOptions>
            {watchDeliveryEstimate} by {watchCurrentShipment}
          </ChosenOptions>
        </>
      )}

      {/* Appears in summary only when payment option is clicked */}
      {watchCurrentPayment && (
        <>
          <hr />
          <p>Payment method</p>
          <ChosenOptions>{watchCurrentPayment}</ChosenOptions>
        </>
      )}

      {/* Total Summary */}
      <TotalSummary>
        <Cost>
          <p>Cost of goods</p>
          <p>{cost.costOfGood}</p>
        </Cost>
        {watchIsDropship && (
          <Cost>
            <p>Dropshipping Fee</p>
            <p>{cost.dropshippingFee}</p>
          </Cost>
        )}
        {watchCurrentShipment && (
          <Cost>
            <p>
              <strong>{localStorage.getItem("shipment")} </strong>shipment
            </p>
            <p>{cost.deliveryFee}</p>
          </Cost>
        )}
        <Cost>
          <h2>Total</h2>
          <h2>{cost.costOfGood + cost.dropshippingFee + cost.deliveryFee}</h2>
        </Cost>
      </TotalSummary>
      {step < 3 && <button {...restProps}>{proceedButton}</button>}
    </SummaryContainer>
  );
}

export default Summary;
