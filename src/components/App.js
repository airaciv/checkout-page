import React, { useState } from "react";
import Details from "./Details";
import Options from "./Options";
import Finish from "./Finish";
import Summary from "./Summary";
import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  margin: 2rem;
  position: relative;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
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

const Steps = styled.div`
  background-color: #fffae6;
  border-radius: 50px;
  color: #ff8a00;
  margin: auto;
  padding: 0.5rem 1rem 0.5rem 0;
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
  @media (max-width: 1100px) {
    border-radius: 0;
    width: 100%;
    span {
      margin: 1rem;
    }
  }
`;

const StepNumber = styled.span`
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

function App() {
  const [step, setStep] = useState(1);
  const content = [<Details />, <Options />, <Finish />][step - 1];

  // Increase step counter
  function handleClick() {
    setStep(() => {
      if (step < 3) {
        return step + 1;
      }
    });
  }

  // Decrease step counter
  function handleBackClick() {
    setStep(() => {
      if (step >= 0) {
        return step - 1;
      }
    });
  }

  return (
    <div>
      {/* Showing current step */}
      <Steps>
        <p>
          <StepNumber style={{ opacity: 1 }}>1</StepNumber>
          Delivery
          <span className="fa-solid fa-chevron-right"></span>
          <StepNumber style={step >= 2 ? { opacity: 1 } : null}>2</StepNumber>
          Payment
          <span className="fa-solid fa-chevron-right"></span>
          <StepNumber style={step >= 3 ? { opacity: 1 } : null}>3</StepNumber>
          Finish
        </p>
      </Steps>

      {/* To contain both content details and summary */}
      <Container>
        <BackButton onClick={handleBackClick} step={step}></BackButton>
        <ContentContainer>
          {/* Display content based on step counter */}
          {content}
        </ContentContainer>
        {/* Passing over function to handle button click to increase step count to Summary component */}
        <Summary onClick={handleClick} step={step} />
      </Container>
    </div>
  );
}

export default App;
