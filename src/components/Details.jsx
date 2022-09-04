import React, { useState } from "react";
import DeliveryForm from "./DeliveryForm";
import DropshipperForm from "./DropshipperForm";
import styled from "styled-components";

const DetailsTitle = styled.div`
  color: #000000;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  div {
    align-self: center;
    margin-left: auto;
    margin-right: 3rem;
  }
`;

const DeliveryDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Details() {
  const [isDropship, setIsDropship] = useState(false);

  function handleClick(event) {
    if (event.target.checked) {
      setIsDropship(true);
    } else {
      setIsDropship(false);
    }
  }

  return (
    <div>
      <DetailsTitle>
        <h1>Delivery details</h1>
        <div>
          <input
            type="checkbox"
            name="dropship"
            id="dropship"
            value={isDropship}
            onClick={handleClick}
          />
          <label for="dropship">Send as dropshipper</label>
        </div>
      </DetailsTitle>

      <DeliveryDetails>
        <DeliveryForm />
        {/* Passing over isDropship value to DropshipperForm */}
        {isDropship && <DropshipperForm isDropship={isDropship} />}
      </DeliveryDetails>
    </div>
  );
}

export default Details;
