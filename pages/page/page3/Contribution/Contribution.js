import React from "react";
import styled from "styled-components";
import Text from "../../../../components/Text/Text";
import { ValParaContainer, ValuePara } from "../Values/Components/style";
import Box1 from "./Common/Box1";
import { MainContainer,BoxContainer } from "./style";


const Contribution = () => {
  return (
    <MainContainer>
      <Text
        Text="Contribution of the environment"
        lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
        font
        size="40px"
        lh="110%"
        width="100%"
        mwidth="98vw"
        fw="500"
        mlh="50px"
        align="center"
        xmsize="6rem"
        xssize="10vw"
        msize="1.8rem"
        mpadding="0"
        mmargin=" 0 0 2rem 0"
      />

      <ValParaContainer>
      <Text
        Text="“Ramaera Industry is thriving for to protect and conserve the
        environment and hence most of its ventures are constructed on the
        principles of sustainability and conservation."
        fw="500"
        size="25px"
        lh="40px"
        width="100%"
        m="0rem 0 0 0"
        xssize="18px"
        mlh="30px"
        msize="18px"
        mwidth="80vw"
        mta="center"
        align="center"
        padding="0 15vw"
      />
      </ValParaContainer>
      <BoxContainer>
        <div>
          <Box1
            Heading={"Businesses of Tomorrow"}
            ParaGraph={
              "Ramaera Industries aim to create and establish the businesses of tomorrow so that our future generation can enjoy the privilege of sustainable living."} source={"/background/Up.png"}/>
          <Box1
            Heading={"Water Positive"}
            ParaGraph={"Ramaera Industries is committed to conservation of water as it is a great resource and hence, successfully being implementing conservational measures to become water positive."}
            source={"/background/smile.png"}/>
        </div>
        <div>
          <Box1
            Heading={"Carbon Positive"}
            ParaGraph={
              "We are concerned about the climate change and increased levels of carbon dioxide. Ramaera Industries is taking efforts to reduce its carbon emission and remain carbon positive."
            } source={"/background/smile.png"}
          />
          <Box1
            percent={"59%"}
            Heading={" of Total Energy is Renewable"}
            ParaGraph={
              "We are on a mission to become ecofriendly and replace energy consumption with renewable resources. Almost 59% of our industrial operations are powered by renewable energy."
            } source={"/background/Group.png"}
          />
        </div>
      </BoxContainer>
    </MainContainer>
  );
};

export default Contribution;
