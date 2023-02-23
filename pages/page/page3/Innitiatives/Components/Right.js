import React from "react";
import styled from "styled-components";
import Text from "../../../../../components/Text/Text";
import {RightContainer,ImgBg, Heading,ReverseText, Info, InfoContainer,InfoHead,InfoPara} from "../Components/style";
const Right = () => {
  return (
    <div style={{ width: "70%" }}>
      <RightContainer>
      <div data-aos="fade-left">
        <ImgBg>
        <div data-aos="fade-up">
        <Text
            Text="Ramaera Industries"
            lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
            font
            size="2.5rem"
            lh="45px"
            width="71%"
            mwidth="95%"
            fw="500"
            m="0px auto"
            mlh="25px"
            xmsize="6rem"
            xssize="10vw"
            msize="1rem"
            mpadding="0rem 0 0 1rem"
            padding="0 0 0 0rem"
            mmargin="0rem 0 0 0"
            align="center"
         
          /> 
          {/* <Heading>
            Ramaera <br /> Industries
          </Heading> */}
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
