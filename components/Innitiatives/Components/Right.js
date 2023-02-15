import React from "react";
import styled from "styled-components";
import {RightContainer,ImgBg, Heading,ReverseText, Info, InfoContainer,InfoHead,InfoPara} from "../Components/style";
const Right = () => {
  return (
    <div style={{ width: "70%" }}>
      <RightContainer>
        <ImgBg>
          <Heading>
            Ramaera <br /> Industries
          </Heading>
          <ReverseText src={"/background/reverse.png"} />
          <Info>
            <InfoContainer>
              <div style={{ margin: "0px 20px" }}>
                <InfoHead>1600000+</InfoHead>
                <InfoPara>Ramaera Group Direct Employees</InfoPara>
              </div>
              <div>
                <InfoHead>24</InfoHead>
                <InfoPara>Field Workers</InfoPara>
              </div>
            </InfoContainer>
            <InfoContainer>
              <div style={{ margin: "0px 20px" }}>
                <InfoHead>12</InfoHead>
                <InfoPara>Years Stablished</InfoPara>
              </div>
              <div>
                <InfoHead>250</InfoHead>
                <InfoPara>Complete Projects</InfoPara>
              </div>
            </InfoContainer>
          </Info>
        </ImgBg>
      </RightContainer>
    </div>
  );
};

export default Right;
