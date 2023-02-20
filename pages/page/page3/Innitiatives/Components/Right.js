import React from "react";
import styled from "styled-components";
import {RightContainer,ImgBg, Heading,ReverseText, Info, InfoContainer,InfoHead,InfoPara} from "../Components/style";
const Right = () => {
  return (
    <div style={{ width: "70%" }}>
      <RightContainer>
      <div data-aos="fade-left">
        <ImgBg>
        <div data-aos="fade-up">
          <Heading>
            Ramaera <br /> Industries
          </Heading>
          </div>
          
          <ReverseText src={"/background/reverse.png"} />
          <Info>
            <InfoContainer>
              <div style={{ margin: "0px 20px" }}>
              <div data-aos="fade-right">
                <InfoHead>1600000+</InfoHead>
                <InfoPara>Ramaera Group Direct Employees</InfoPara>
                </div>
              </div>
              <div>
              <div data-aos="fade-right">
                <InfoHead>24</InfoHead>
                <InfoPara>Field Workers</InfoPara>
                </div>
              </div>
            </InfoContainer>
            <InfoContainer>
              <div style={{ margin: "0px 20px" }}>
              <div data-aos="fade-left">
                <InfoHead>12</InfoHead>
                <InfoPara>Years Stablished</InfoPara>
                </div>
              </div>
              <div>
              <div data-aos="fade-left">
                <InfoHead>250</InfoHead>
                <InfoPara>Complete Projects</InfoPara>
                </div>
              </div>
            </InfoContainer>
          </Info>
        </ImgBg>
        </div>
      </RightContainer>
    </div>
  );
};

export default Right;
