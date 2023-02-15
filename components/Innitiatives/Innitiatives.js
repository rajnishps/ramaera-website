import React from "react";
import Left from "./Components/Left";
import Right from "./Components/Right";
import {InnitiativeHead, Best, Left1} from "./Components/style";
const Innitiatives = () => {
  return (
    <div>
      <InnitiativeHead>INITIATIVES TO PROMOTE SUSTAINABILITY</InnitiativeHead>
      <Best>
       <Left/>
       <Right/>
      </Best>
    </div>
  );
};

export default Innitiatives;
