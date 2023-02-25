import React from "react"
import styled from "styled-components"
import Text from "../../../../../../components/Text/Text"
import TeamBox, { ImageBox } from "./TeamBox"

const PillerContainer = styled.div`
  width: 90%;
  margin: 10% auto;
  @media (max-width: 600px) {
    width: 90%;
    margin: 0px auto;
  }
`

const ImageContainer = styled.div`
  width: 80%;
  height: 80.1vh;
  box-sizing: border-box;
  margin: 5% auto;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const TextContainer = styled.div`
  position: absolute;
  pointer-events: none;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  width: 80%;
  height: 80.1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  &:hover {
    opacity: 0;
    display: none;
  }
  ${ImageContainer}:hover & {
    display: none;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
    width: 70%;
  }
`

const Pillers = () => {
  return (
    <PillerContainer>
      <div data-aos="fade-right">
        <Text
          Text="Meet the pillars of Ramaera"
          lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
          font
          size="3rem"
          lh="30px"
          width="100%"
          align="center"
          mwidth="100%"
          fw="500"
          mlh="45px"
          m="0 0 0 0rem"
          // align="center"
          xmsize="2rem"
          xssize="4vw"
          msize="2rem"
          mpadding="0"
          padding="0"
          mmargin="0 0 0 0"
        />
      </div>
      <div data-aos="fade-left">
        <Text
          Text="The Ramaera Management is the foundation pillar of the organisation and
        the reason of our scalability and success."
          fw="400"
          size="25px"
          lh="40px"
          width="100%"
          m="2rem 0 0 0"
          xssize="18px"
          mlh="25px"
          msize="13px"
          mwidth="100%"
          mta="center"
          align="center"
          padding="0 13vw"
          mmargin="0px"
        />
      </div>
      <ImageContainer>
        <TextContainer>
          <p style={{ width: "70%" }}>
            The Ramaera Management is the foundation pillar of the organisation
            and the reason of our scalability and success.
          </p>
        </TextContainer>

        <TeamBox
          imgUrl={"/background/CEO.jpeg"}
          hoverImg={"/background/CEO2.png"}
          mobileImg={"/background/mobileCEO.png"}
        />
        <TeamBox
          imgUrl={"/background/Team1.jpeg"}
          mobileImg={"/background/mobileInn.png"}
          hoverImg={"/background/hover1.png"}
        />
        <TeamBox
          imgUrl={"/background/Team2.jpeg"}
          mobileImg={"/background/mobileSus.png"}
          hoverImg={"/background/hover2.png"}
        />
        <TeamBox
          imgUrl={"/background/Team3.jpeg"}
          mobileImg={"/background/mobileImp.png"}
          hoverImg={"/background/hover3.png"}
          // bgPos={"top"}
        />
      </ImageContainer>
    </PillerContainer>
  )
}

export default Pillers
