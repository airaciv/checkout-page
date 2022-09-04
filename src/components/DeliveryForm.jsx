import React from "react";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import Input from "./Input";

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

const TextArea = styled.textarea`
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
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    const { name, phoneNumber, deliveryAddress } = data;
    localStorage.setItem(
      "data",
      JSON.stringify({
        name: name,
        phoneNumber: phoneNumber,
        deliveryAddress: deliveryAddress,
      })
    );
  };
  const data = JSON.parse(localStorage.getItem("data"));

  return (
    <DeliverForm onChange={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input
          id="name"
          defaultValue={data.name}
          {...register("name", { required: true, maxLength: 20 })}
        />
        <label for="name">Name</label>
      </InputContainer>

      <InputContainer>
        <Input
          id="phone-number"
          defaultValue={data.phoneNumber}
          {...register("phoneNumber", {
            required: true,
            minLength: 6,
            maxLength: 20,
            pattern: /^[0-9-+,]+$/,
          })}
        />
        <label for="phone-number">Phone Number</label>
      </InputContainer>

      <InputContainer>
        <TextArea
          id="delivery-address"
          rows="10"
          defaultValue={data.deliveryAddress}
          {...register("deliveryAddress", { required: true, maxLength: 120 })}
        ></TextArea>
        <label for="delivery-address">Delivery Address</label>
      </InputContainer>
    </DeliverForm>
  );
}

export default DeliveryForm;
