import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Input from "./Input";

const DropshipForm = styled.form`
  flex: 1 1 40%;
  margin-bottom: 3rem;
  @media (max-width: 1100px) {
    flex: 1 1 100%;
    margin-top: 8rem;
  }
`;

const InputContainer = styled.div`
  margin: 0 2rem 1rem 0;
  position: relative;
  border-radius: 4px 4px 0 0;
  height: 56px;
  transition: background-color 500ms;
`;

function DropshipperForm(props) {
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    const { dropshipperName, dropshipperPhoneNumber } = data;
    localStorage.setItem(
      "data",
      JSON.stringify({
        dropshipperName: dropshipperName,
        dropshipperPhoneNumber: dropshipperPhoneNumber,
      })
    );
  };
  const data = JSON.parse(localStorage.getItem("data"));

  return (
    <DropshipForm onChange={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input
          id="dropshipper-name"
          defaultValue={data.dropshipperName}
          {...register("dropshipperName", { required: true, maxLength: 20 })}
        />
        <label for="dropshipper-name">Dropshipper name</label>
      </InputContainer>

      <InputContainer>
        <Input
          id="dropshipper-phone-number"
          defaultValue={data.dropshipperPhoneNumber}
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

export default DropshipperForm;
