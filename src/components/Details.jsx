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
  label {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    color: #cccccc;
    transform-origin: left top;
    user-select: none;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
      color 150ms cubic-bezier(0.4, 0, 0.2, 1), top 500ms;
  }
  textarea {
    width: 100%;
    box-sizing: border-box;
    background: transparent;
    caret-color: var(--accent-color);
    border: 1px solid #cccccc;
    color: black;
    transition: border 500ms;
    padding: 20px 16px 6px;
    font-size: 1rem;
  }
  textarea:focus {
    outline: none;
    border-bottom-width: 2px;
    border-bottom-color: var(--accent-color);
  }
  textarea:focus + label {
    color: var(--accent-color);
  }
  input:focus + label,
  input.is-valid + label,
  textarea:focus + label,
  textarea.is-valid + label {
    transform: translateY(-100%) scale(0.75);
  }
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
        {isDropship && <DropshipperForm />}
      </DeliveryDetails>
    </div>
  );
}

export default Details;
