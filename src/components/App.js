import React, { useState } from "react";
import Content from "./Content";
import Summary from "./Summary";

function App() {
  const [step, setStep] = useState(1);
  const [backButton, setBackButton] = useState("cart");

  // Increase step counter
  function handleClick() {
    setStep(() => {
      if (step < 3) {
        return step + 1;
      }
    });
    setBackButton(() => {
      if (step === 1) {
        return "cart";
      } else if (step === 2) {
        return "delivery";
      }
    });
  }

  return (
    <div>
      <div className="steps">
        <p>
          <span className="step-number">1</span>Delivery
          <span className="fa-solid fa-chevron-right"></span>
          <span className="step-number">2</span>Payment
          <span className="fa-solid fa-chevron-right"></span>
          <span className="step-number">3</span>Finish
        </p>
      </div>

      <div className="container">
        <div className="back-arrow">
          <i className="fa-solid fa-arrow-left"></i>
          <a href="http://">Back to {backButton}</a>
        </div>
        <div className="content-container">
          <Content step={step} />
        </div>
        <Summary onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
