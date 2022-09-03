import React, { useState } from "react";

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
    <form action="" className="delivery-form">
      <div className="input-container" id="name">
        <input
          id="name"
          value={deliveryForm.name}
          onChange={handleChange}
          className={deliveryForm.name !== "" && "is-valid"}
        />
        <label for="name">Name</label>
      </div>

      <div className="input-container">
        <input
          id="phone-number"
          value={deliveryForm.phoneNumber}
          onChange={handleChange}
          className={deliveryForm.phoneNumber !== "" && "is-valid"}
        />
        <label for="phone-number">Phone Number</label>
      </div>
      <div className="input-container">
        <textarea
          id="delivery-address"
          rows="10"
          value={deliveryForm.deliveryAddress}
          onChange={handleChange}
          className={deliveryForm.deliveryAddress !== "" && "is-valid"}
        ></textarea>
        <label for="delivery-address">Delivery Address</label>
      </div>
    </form>
  );
}

export default DeliveryForm;
