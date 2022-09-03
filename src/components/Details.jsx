import React, { useState } from "react";
import DeliveryForm from "./DeliveryForm";
import DropshipperForm from "./DropshipperForm";

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
      <div className="details-title">
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
      </div>
      <div className="delivery-details">
        <DeliveryForm />
        {isDropship && <DropshipperForm />}
      </div>
    </div>
  );
}

export default Details;
