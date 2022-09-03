import React, { useState } from "react";
import styled from "styled-components";

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

function DropshipperForm() {
  const [dropshipForm, setDropshipForm] = useState({
    name: "",
    phoneNumber: "",
  });

  // Change value on input change
  function handleChange(event) {
    const { name, value } = event.target;
    setDropshipForm((prevValue) => {
      return { prevValue, [name]: value };
    });
  }

  return (
    <DropshipForm>
      <InputContainer>
        <input
          type="text"
          id="dropshipper-name"
          value={dropshipForm.name}
          onChange={handleChange}
          className={dropshipForm.name !== "" && "is-valid"}
        />
        <label for="dropshipper-name">Dropshipper name</label>
      </InputContainer>
      <InputContainer>
        <input
          type="text"
          id="dropshipper-phone-number"
          value={dropshipForm.phoneNumber}
          onChange={handleChange}
          className={dropshipForm.phoneNumber !== "" && "is-valid"}
        />
        <label for="dropshipper-phone-number">Dropshipper phone number</label>
      </InputContainer>
    </DropshipForm>
  );
}

export default DropshipperForm;
