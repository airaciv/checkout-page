import React, { useState } from "react";
import Content from "./Content";
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
`;

const BackArrow = styled.div`
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

function App() {
  const [step, setStep] = useState(1);

  console.log(step);
  // Increase step counter
  function handleClick() {
    setStep(() => {
      if (step < 3) {
        return step + 1;
      }
    });
  }

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
          <StepNumber>1</StepNumber>Delivery
          <span className="fa-solid fa-chevron-right"></span>
          <StepNumber>2</StepNumber>Payment
          <span className="fa-solid fa-chevron-right"></span>
          <StepNumber>3</StepNumber>Finish
        </p>
      </Steps>

      {/* To contain both content details and summary */}
      <Container>
        <BackArrow onClick={handleBackClick}>
          <i className="fa-solid fa-arrow-left"></i>
          <a href="http://">Back to cart</a>
        </BackArrow>
        <ContentContainer>
          <Content step={step} />
        </ContentContainer>
        <Summary onClick={handleClick} />
      </Container>
    </div>
  );
}

export default App;
