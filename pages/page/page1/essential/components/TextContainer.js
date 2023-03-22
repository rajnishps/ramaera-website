import Link from "next/link"
import React from "react"
import styled from "styled-components"
import Flex from "../../../../../components/Styling/Flex"
import Text from "../../../../../components/Text/Text"
import TransparentButton from "../../../../../components/TransparentButton/TransparentButton"

const StyleTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  // background: red;
  width: 50rem;
  margin: 1rem 0 -7.5rem 130px;
  @media only screen and (max-width: 768px) {
    position: absolute;
    margin: 0;
    width: 100vw;
    top: 5vh;
    overflow: hidden;
  }
`
const ButtonWrapper = styled.div`
  padding: 2vh 23vw 0 0;
  @media only screen and (max-width: 768px) {
    padding: 2vh 30vw 2vh 30vw;
  }
  @media only screen and (max-width: 400px) {
    padding: 2vh 25vw 2vh 25vw;
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
            src="/content/h.png"
            alt="line"
            style={{
              height: "6.2rem",
              width: "6.2rem",
              borderRadius: "50%",
              margin: "0",
            }}
          />
        </IconDiv>

        <div>
          <Text
            Text="Get all your essentials"
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
            Text="in one place"
            lg="linear-gradient(90deg, #B4DFFD 3.93%, #EFB79B 36.17%),linear-gradient(0deg, #FFFFFF, #FFFFFF)"
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
        Text="Ramaera Supermart is an online customer oriented marketplace to motivated to provide everything you need right at one place under the comfort of your homes."
        fw="500"
        size="20px"
        lh="45px"
        width="31rem"
        m="1rem 0 0 0"
        xssize="18px"
        mlh="30px"
        msize="18px"
        ƒ
        mwidth="100vw"
        mta="center"
        padding="0 0 0 0vw"
      />
      <ButtonWrapper>
        <Link href="/Industries#ecom">
          <TransparentButton
            Text="Read more"
            border="solid #B4DFFD 1.6px"
            bg="linear-gradient(90deg, #B4DFFD 0%, #EFB79B 100%)"
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
