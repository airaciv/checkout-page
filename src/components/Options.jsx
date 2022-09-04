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

function Options({
  useFormReturn,
  deliveryOptions,
  paymentOptions,
  ...restProps
}) {
  //React hook form
  const { register, setValue, watch } = useFormReturn;
  const watchCurrentShipment = watch("shipmentName");
  const watchCurrentPayment = watch("paymentName");

  return (
    <div>
      <h1>Shipment</h1>
      <form>
        <AvailableOptions>
          {/* Generate button for each delivery options */}
          {deliveryOptions.map((option) => {
            /* Change styling if current chosen shipment is equal to the name of the button */
            const buttonStyle =
              watchCurrentShipment === option.name
                ? {
                    backgroundColor: "rgba(27, 217, 123, 0.2)",
                    borderColor: "#1bd97b",
                  }
                : {};

            return (
              <>
                <input
                  type="hidden"
                  {...register("shipmentName", { required: true })}
                ></input>
                <button
                  style={buttonStyle}
                  type="button"
                  onClick={() => {
                    setValue("shipmentName", option.name);
                    setValue("shipmentFee", option.shipmentFee);
                  }}
                >
                  {option.name}
                  <br></br>
                  <strong>{option.shipmentFee}</strong>
                </button>
              </>
            );
          })}
        </AvailableOptions>
      </form>

      <h1>Payment</h1>
      <AvailableOptions>
        {/* Generate button for each payment options */}
        {paymentOptions.map((option) => {
          /* Change styling if current chosen payment is equal to the name of the button */
          const buttonStyle =
            watchCurrentPayment === option.name
              ? {
                  backgroundColor: "rgba(27, 217, 123, 0.2)",
                  borderColor: "#1bd97b",
                }
              : {};
          return (
            <>
              <input
                type="hidden"
                {...register("paymentName", { required: true })}
              ></input>
              <button
                style={buttonStyle}
                type="button"
                onClick={() => {
                  setValue("paymentName", option.name);
                  setValue("comment", option.comment);
                }}
              >
                {option.name}
                <br></br>
                <strong>{option.comment}</strong>
              </button>
            </>
          );
        })}
      </AvailableOptions>
    </div>
  );
}

export default Options;
