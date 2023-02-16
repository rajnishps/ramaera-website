import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import { ValParaContainer, ValuePara } from "../Values/Components/style";
import ParnterEnd from "./ParnterEnd";
import PartnerBox from "./PartnerBox";

const MainContainer = styled.div`
  width: 100%;
`;

const PartnerBoxContainer = styled.div`
  width: 90%;
  margin: 50px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 600px){
    width: 95%;
    margin: 0px auto;
    flex-direction: column;
  }
`;

const Partner = () => {
  return (
    <MainContainer>
      <Text
        Text="Become a partner with Ramaera"
        lg="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
        font
        size="40px"
        lh="110%"
        width="100%"
        mwidth="100vw"
        fw="500"
        mlh="80px"
        align="center"
        xmsize="6rem"
        xssize="10vw"
        msize="3.8rem"
        mpadding="0"
        mmargin=" 0 0 2rem 0"
      />
      <ValParaContainer>
        <ValuePara>
          Join us on our entrepreneurial venture by becoming a trustee and
          embark on the journey of success
        </ValuePara>
      </ValParaContainer>
      <PartnerBoxContainer>
        <PartnerBox Heading={"INVESTMENT SHARE PERCENTAGE"} Para ={"We believe in honesty and fair share and hence, a percentage will be allotted to each and every project investor depending on the investment they do. They will also receive a monthly return of investment along with various other benefits."}/>

        <PartnerBox Heading={"COMPLETE OPERATIONAL TRANSPARENCY"} Para={"All our investors in the Ramaera industry will be fairly aware of all the operations and revenue based management. They will have information about each and every penny utilised out of their investment."}/>

        <PartnerBox Heading={"LIFELONG SOURCE OF PASSIVE INCOME"} Para={"The investment stakes in Ramaera projects will be based on the life of the project invested and hence, promise a generational output that will be delivered to the children and so on."}/>
      </PartnerBoxContainer>
      <ParnterEnd/>
    </MainContainer>
  );
};

export default Partner;
