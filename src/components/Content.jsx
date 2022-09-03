import React from "react";
import Details from "./Details";
import Options from "./Options";
import Finish from "./Finish";

function Content(props) {
  // Render content based on the step count
  if (props.step === 1) {
    return <Details />;
  } else if (props.step === 2) {
    return <Options />;
  } else {
    return <Finish />;
  }
}

export default Content;
