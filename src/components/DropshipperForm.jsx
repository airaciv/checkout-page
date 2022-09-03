import React, { useState } from "react";

function DropshipperForm() {
  const [dropshipForm, setDropshipForm] = useState({
    name: "",
    phoneNumber: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDropshipForm((prevValue) => {
      return { prevValue, [name]: value };
    });
  }

  return (
    <form action="" className="dropshipper-form">
      <div className="input-container">
        <input
          type="text"
          id="dropshipper-name"
          value={dropshipForm.name}
          onChange={handleChange}
          className={dropshipForm.name !== "" && "is-valid"}
        />
        <label for="dropshipper-name">Dropshipper name</label>
      </div>
      <div className="input-container">
        <input
          type="text"
          id="dropshipper-phone-number"
          value={dropshipForm.phoneNumber}
          onChange={handleChange}
          className={dropshipForm.phoneNumber !== "" && "is-valid"}
        />
        <label for="dropshipper-phone-number">Dropshipper phone number</label>
      </div>
    </form>
  );
}

export default DropshipperForm;
