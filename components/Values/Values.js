import React from "react";
import {
  ValueContainer,
  ValParaContainer,
  ValuePara,
  InnovationDiv,
  InnovationLeft,
  InnovationHead,
  InnovatinRight,
  InnoPara,
  Img,
  InnoParaContainer,
  Arrow,
} from "./Components/style";

import Text from "../Text/Text";

const Values = () => {
  return (
    <ValueContainer>
      <Text
        Text="THE VALUES OF RAMAERA"
        lg="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
        font
        size="50px"
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
          The Love and the trust of our Ramaera Family has been the foundation
          of our growth and has helped us to strengthen our core values as an
          industry for the people
        </ValuePara>
      </ValParaContainer>
      <InnovationDiv>
        <InnovationLeft>
          <InnovationHead>Innovation</InnovationHead>
          <Img src={"/background/InnoGif.gif"}></Img>
        </InnovationLeft>
        <InnovatinRight>
          <InnoParaContainer>
            <InnoPara>
              INNOVATION Redefining excellence and the magnitude of Innovation
              to realise the convenience today and tomorrow
            </InnoPara>
          </InnoParaContainer>
          <Arrow src={"/background/arrow.png"} />
        </InnovatinRight>
      </InnovationDiv>
    </ValueContainer>
  );
};

export default Values;
