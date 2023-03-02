import Link from "next/link"
import React from "react"
import styled from "styled-components"
import Flex from "../../../../../components/Styling/Flex"
import Text from "../../../../../components/Text/Text"
import TransparentButton from "../../../../../components/TransparentButton/TransparentButton"

const StyleTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  // background: red;
  width: 50rem;
  margin: 5rem 0 -5rem 0;
  @media only screen and (max-width: 768px) {
    position: absolute;
    margin: 0;
    width: 100vw;
    top: 5vh;
    overflow: hidden;
  }
`
const IconDiv = styled.div`
  @media only screen and (max-width: 768px) {
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
              height: "6.75rem",
              width: "7rem",
              borderRadius: "50%",
              margin: "0",
            }}
          />
        </IconDiv>

        <div>
          <Text
            Text="Get all your essentials"
            size="42px"
            color="#FFF"
            lh="50px"
            mlh="30px"
            msize="1.6rem"
            mta="center"
            mwidth="100vw"
            padding="1vw 2.5vw"
          />
          <Text
            Text="in one place"
            size="42px"
            lg="linear-gradient(90deg, #B4DFFD 3.93%, #EFB79B 36.17%),linear-gradient(0deg, #FFFFFF, #FFFFFF)"
            lh="15px"
            mlh="30px"
            msize="2rem"
            mta="center"
            mwidth="100vw"
            padding="1vw  2.5vw"
          />
        </div>
      </Flex>
      <Text
        Text="Ramaera Supermart is an online customer oriented marketplace to motivated to provide everything you need right at one place under the comfort of your homes."
        fw="500"
        size="23px"
        lh="45px"
        width="40rem"
        m="2rem 0 0 0"
        xssize="18px"
        mlh="30px"
        msize="18px"
        mwidth="100vw"
        mta="center"
        padding="0 0 0 5vw"
      />
      <div style={{ padding: " 2vh 17.5vw 0 0 " }}>
        <Link href="/industries#ecom">
          <TransparentButton
            Text="Read more"
            border="solid #9796F0 2px"
            br="2rem"
            height="60px"
            m="2rem 0 0 0"
          />
        </Link>
      </div>
    </StyleTextContainer>
  )
}

export default TextContainer
