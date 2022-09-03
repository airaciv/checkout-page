import React, { useState } from "react";
import styled, { css } from "styled-components";

const DeliverForm = styled.form`
  flex: 1 1 60%;
  textarea {
    font-family: "Inter", sans-serif;
    height: 150px;
    width: 100%;
  }
  @media (max-width: 1100px) {
    flex: 1 1 100%;
  }
`;

const InputContainer = styled.div`
  margin: 0 2rem 1rem 0;
  position: relative;
  border-radius: 4px 4px 0 0;
  height: 56px;
  transition: background-color 500ms;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  caret-color: var(--accent-color);
  border: 1px solid #cccccc;
  color: black;
  transition: border 500ms;
  padding: 20px 16px 6px;
  font-size: 1rem;

  + label {
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
    ${(props) =>
      props.value &&
      css`
        transform: translateY(-100%) scale(0.75);
      `}
  }

  :focus {
    outline: none;
    border-bottom-width: 2px;
    border-bottom-color: var(--accent-color);

    + label {
      color: var(--accent-color);
      transform: translateY(-100%) scale(0.75);
    }
  }
`;

function DeliveryForm() {
  const [deliveryForm, setDeliveryForm] = useState({
    name: "",
    phoneNumber: "",
    deliveryAddress: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDeliveryForm((prevValue) => {
      return { prevValue, [name]: value };
    });
    console.log(deliveryForm.value);
  }

  return (
    <DeliverForm>
      <InputContainer>
        <Input id="name" value={deliveryForm.name} onChange={handleChange} />
        <label for="name">Name</label>
      </InputContainer>

      <InputContainer>
        <input
          id="phone-number"
          value={deliveryForm.phoneNumber}
          onChange={handleChange}
          className={deliveryForm.phoneNumber !== "" && "is-valid"}
        />
        <label for="phone-number">Phone Number</label>
      </InputContainer>

      <InputContainer>
        <textarea
          id="delivery-address"
          rows="10"
          value={deliveryForm.deliveryAddress}
          onChange={handleChange}
          className={deliveryForm.deliveryAddress !== "" && "is-valid"}
        ></textarea>
        <label for="delivery-address">Delivery Address</label>
      </InputContainer>
    </DeliverForm>
  );
}

export default DeliveryForm;
