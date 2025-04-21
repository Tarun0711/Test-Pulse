import React from "react";
import { useSelector } from "react-redux";
import Details from "./Details/Details";
import Plateform from "./Plateform/Index";
import Result from "./Result";

const RenderSteps = () => {
  const { step } = useSelector((state) => state.quiz);


return(
    <div>
        {step === 1 && <Details />}
        {step === 2 && <Plateform />}
        {step===3 && <Result/>}
    </div>
    
)
};
export default RenderSteps;