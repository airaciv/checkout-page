import React, { useState } from "react";
import Details from "./Details";
import Options from "./Options";
import Finish from "./Finish";
import Summary from "./Summary";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  margin: 2rem;
  padding-bottom: 3rem;
  position: relative;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    padding-bottom: 0;
  }
`;

const ContentContainer = styled.div`
  flex: 1 1 70%;
  margin: 5rem 0 0 2rem;
  padding-left: 2rem;
  @media (max-width: 1100px) {
    flex: 1 1 100%;
    margin-top: 8rem;
  }
`;

const Steps = styled(PlainSteps)`
  background-color: #fffae6;
  border-radius: 50px;
  color: #ff8a00;
  margin: auto;
  padding: 0.5rem 1rem 1rem 0;
  position: relative;
  top: 3rem;
  text-align: center;
  width: 50%;
  z-index: 1;
  span {
    margin-left: 2rem;
  }
  p {
    padding: 0;
  }
  .step-number {
    background-color: #ff8a00;
    border-radius: 50%;
    color: #ffffff;
    display: inline-block;
    height: 1.8rem;
    width: 1.8rem;
    line-height: 1rem;
    padding: 10px 5px 0;
    margin-right: 1rem;
    opacity: 0.2;
  }
  @media (max-width: 1100px) {
    border-radius: 0;
    width: 100%;
    span {
      margin: 1rem;
    }
  }
`;

const BackButton = styled(PlainBackButton)`
  position: absolute;
  left: 4rem;
  top: 2rem;
  a {
    color: #000000;
    margin-left: 0.5rem;
    text-decoration: none;
  }
  @media (max-width: 1100px) {
    left: 2rem;
    top: 6rem;
  }
`;

// Generate different back button content based on step number
function PlainBackButton({ step, ...restProps }) {
  let content = null;

  if (step === 1) {
    content = (
      <>
        <i className="fa-solid fa-arrow-left"></i>
        <span> Back to cart</span>
      </>
    );
  } else if (step === 2) {
    content = (
      <>
        <i className="fa-solid fa-arrow-left"></i>
        <span> Back to delivery</span>
      </>
    );
  }

  return <div {...restProps}>{content}</div>;
}

// Generate step display
function PlainSteps({ steps, currentStep, ...restProps }) {
  const content = steps.map((step, i) => {
    let chevron = null;
    const stepNumberStyle = i + 1 <= currentStep ? { opacity: 1 } : {};

    if (i < steps.length - 1) {
      chevron = <span className="fa-solid fa-chevron-right"></span>;
    }

    return (
      <>
        <span className="step-number" style={stepNumberStyle}>
          {i + 1}
        </span>
        {step}
        {chevron}
      </>
    );
  });

  return <p {...restProps}>{content}</p>;
}

function App() {
  const [step, setStep] = useState(1);
  const data = JSON.parse(localStorage.getItem("data") ?? "{}");

  // Generate random order ID
  let orderID = "";
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  for (let i = 0; i < 5; i++) {
    orderID += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // React Hook form
  const useFormReturn = useForm({
    mode: "onChange",
    defaultValues: data,
  });

  const { handleSubmit } = useFormReturn;

  const onSubmit = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    if (step < 3) {
      setStep(step + 1);
    }
  };

  //Delivery and Payment Options
  const deliveryOptions = [
    { name: "GO-SEND", shipmentFee: 15000, deliveryEstimate: "today" },
    { name: "JNE", shipmentFee: 9000, deliveryEstimate: "2 days" },
    { name: "Personal Courier", shipmentFee: 29000, deliveryEstimate: "1 day" },
  ];

  const paymentOptions = [
    { name: "e-Wallet", comment: "1,500,000 left" },
    { name: "Bank Transfer" },
    { name: "Virtual Account" },
  ];

  //Generate content based on step number
  const content = [
    <Details useFormReturn={useFormReturn} />,
    <Options
      useFormReturn={useFormReturn}
      deliveryOptions={deliveryOptions}
      paymentOptions={paymentOptions}
      orderID={orderID}
    />,
    <Finish useFormReturn={useFormReturn} orderID={orderID} />,
  ][step - 1];

  // Decrease step counter
  function handleBackClick() {
    if (step >= 0) {
      setStep(step - 1);
    }
  }

  return (
    <div>
      <Steps steps={["Delivery", "Payment", "Finish"]} currentStep={step} />
      <Container>
        <BackButton onClick={handleBackClick} step={step}></BackButton>
        <ContentContainer>
          {content} {/* Display content based on step counter */}
        </ContentContainer>
        {/* Passing over function to submit form on button click */}
        <Summary
          onClick={handleSubmit(onSubmit)}
          step={step}
          useFormReturn={useFormReturn}
        />
      </Container>
    </div>
  );
}

export default App;
