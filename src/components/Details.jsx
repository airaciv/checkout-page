import React, { useState } from "react";
import DeliveryForm from "./DeliveryForm";
import DropshipperForm from "./DropshipperForm";
import styled from "styled-components";
import { useForm } from "react-hook-form";

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
  const [isDropship, setIsDropship] = useState(
    localStorage.getItem("isDropship")
  );

  function handleClick(event) {
    localStorage.setItem("isDropship", event.target.checked);
    setIsDropship(event.target.checked);
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
        {isDropship && <DropshipperForm />}
      </DeliveryDetails>
    </div>
  );
}

export default Details;
