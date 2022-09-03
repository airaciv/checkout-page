import React from "react";
import styled from "styled-components";

const Thankyou = styled.div`
  padding: 10% 20%;
  margin-bottom: 3rem;
  @media (max-width: 1100px) {
    padding: 0;
  }
`;

const BackButton = styled.div`
  margin-top: 4rem;
  a {
    color: #000000;
    text-decoration: none;
  }
  @media (max-width: 1100px) {
    margin-top: 2rem;
  }
`;

function Finish() {
  var orderID = "";
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  for (let i = 0; i < 5; i++) {
    orderID += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return (
    <Thankyou>
      <h1>Thank you</h1>
      <p>
        <strong>Order ID: {orderID}</strong>
      </p>
      <p>Your order will be delivered today with GO-SEND</p>
      <BackButton>
        <i className="fa-solid fa-arrow-left"></i>
        <a href="http://"> Go to homepage</a>
      </BackButton>
    </Thankyou>
  );
}

export default Finish;
