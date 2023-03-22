import React from "react"
import styled from "styled-components"
import Flex from "../../../../../components/Styling/Flex"
import Text from "../../../../../components/Text/Text"
import Link from "next/link"
import TransparentButton from "../../../../../components/TransparentButton/TransparentButton"

const StyleTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  // background: red;
  width: 50rem;
  margin: 1rem 0 -7.5rem 100px;
  @media only screen and (max-width: 768px) {
    position: absolute;
    margin: 0;
    margin-top: 100px;
    width: 100vw;
    top: 0vh;
    overflow: hidden;
  }
  /* @media only screen and (max-width: 400px) {
    padding: 200px 0;
  } */
  //@media only screen and (max-width: 400px) {
  //margin-top: 250px;
  //  }
`
const ButtonWrapper = styled.div`
  padding: 2vh 22vw 0 0;

  @media only screen and (max-width: 768px) {
    padding: 2vh 30vw 2vh 30vw;
  }
  @media only screen and (max-width: 400px) {
    padding: 2vh 25vw 2vh 25vw;
  }
`
const ImageTag = styled.img`
  width: 200px;
  transition: 200ms;
  &:hover {
    transform: scale(1.05);
  }
`
const IconDiv = styled.div`
  @media only screen and (min-width: 768px) {
    position: absolute;
    left: -120px;
  }
`
const TextContainer = () => {
  return (
    <StyleTextContainer>
      <Flex mcolumn>
        <IconDiv>
          <img
            loading="lazy"
            src="/content/y.png"
            alt="line"
            style={{
              height: "6.2rem",
              width: "6.6rem",
              borderRadius: "50%",
            }}
          />
        </IconDiv>
        <div>
          <Text
            Text="Making"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%);"
            align="left"
            size="42px"
            lh="55px"
            mlh="30px"
            xmsize="2rem"
            xssize="3vw"
            msize="2rem"
            mta="center"
            padding="0"
          />
          <Text
            Text="accommodations easier"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%);"
            align="left"
            size="42px"
            lh="55px"
            mlh="30px"
            xmsize="2rem"
            xssize="3vw"
            msize="2rem"
            mta="center"
            padding="0"
          />
        </div>
      </Flex>
      <Text
        Text="Introducing capsule hotels in places of extreme need such as examination centres and hospitals to provide comfortable and convenient accommodation at pocket friendly prices."
        fw="500"
        size="20.5px"
        lh="40px"
        width="32.5rem"
        m="1rem 0 0 0"
        xssize="18px"
        mlh="30px"
        msize="18px"
        mwidth="100vw"
        mta="center"
        padding="0 0 0 0vw "
      />
      <ButtonWrapper>
        <Link href="/Industries#hotel">
          <TransparentButton
            Text="Read more"
            border="solid #FFE259 1.6px"
            bg="linear-gradient(180deg, #FFE259 0%, #FFA751 100%);"
            height="48px"
            m="2rem 0 0 0"
            br="1.1rem"
            fw="300"
            fontSize="14px"
          />
        </Link>
      </ButtonWrapper>
    </StyleTextContainer>
  )
}

export default TextContainer
