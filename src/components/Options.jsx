import React from "react";

function Options() {
  return (
    <div>
      <h1>Shipment</h1>
      <div className="options">
        <button>
          GO-SEND<br></br>
          <strong>15,000</strong>
        </button>
        <button>
          JNE<br></br>
          <strong>9,000</strong>
        </button>
        <button>
          Personal Courier<br></br>
          <strong>29,000</strong>
        </button>
      </div>

      <h1>Payment</h1>
      <div className="options">
        <button>
          e-Wallet<br></br>
          <strong>1,500,000 left</strong>
        </button>
        <button>Bank Transfer</button>
        <button>Virtual Account</button>
      </div>
    </div>
  );
}

export default Options;
