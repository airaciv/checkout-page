import React, { useState } from "react";
import styled, { css } from "styled-components";
import Input from "./Input";

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

const DropshipForm = styled.form`
  flex: 1 1 40%;
  margin-bottom: 3rem;
  @media (max-width: 1100px) {
    flex: 1 1 100%;
    margin-top: 8rem;
  }
`;

function DeliveryForm({ useFormReturn, ...restProps }) {
  const data = JSON.parse(localStorage.getItem("data") ?? "{}");
  const { register, handleSubmit } = useFormReturn({
    mode: "onChange",
    defaultValues: data,
  });

  const onSubmit = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
  };

  return (
    <DeliverForm onChange={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input
          id="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <label for="name">Name</label>
      </InputContainer>

      <InputContainer>
        <Input
          id="phone-number"
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
          {...register("deliveryAddress", { required: true, maxLength: 120 })}
        ></TextArea>
        <label for="delivery-address">Delivery Address</label>
      </InputContainer>
    </DeliverForm>
  );
}

function DropshipperForm({ useFormReturn, ...restProps }) {
  const dropshipperData = JSON.parse(localStorage.getItem("dropshipperData"));
  const { register, handleSubmit } = useFormReturn({
    mode: "onChange",
    defaultValues: dropshipperData,
  });

  const onSubmit = (data) => {
    const { dropshipperName, dropshipperPhoneNumber } = data;
    localStorage.setItem(
      "dropshipperData",
      JSON.stringify({
        dropshipperName: dropshipperName,
        dropshipperPhoneNumber: dropshipperPhoneNumber,
      })
    );
  };

  return (
    <DropshipForm onChange={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input
          id="dropshipper-name"
          {...register("dropshipperName", { required: true, maxLength: 20 })}
        />
        <label for="dropshipper-name">Dropshipper name</label>
      </InputContainer>

      <InputContainer>
        <Input
          id="dropshipper-phone-number"
          {...register("dropshipperPhoneNumber", {
            required: true,
            minLength: 6,
            maxLength: 20,
            pattern: /^[0-9-+,]+$/,
          })}
        />
        <label for="dropshipper-phone-number">Phone Number</label>
      </InputContainer>
    </DropshipForm>
  );
}

function Details({ useFormReturn, ...restProps }) {
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
        <DeliveryForm useFormReturn={useFormReturn} />
        {isDropship && <DropshipperForm useFormReturn={useFormReturn} />}
      </DeliveryDetails>
    </div>
  );
}

export default Details;
