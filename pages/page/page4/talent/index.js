import React from "react"
import styled from "styled-components"
import Text from "../../../../components/Text/Text"

const Wrapper = styled.div`
  padding: 5vh 10vw;
`
const Container = styled.div`
  display: flex;
`
const LeftDiv = styled.div`
  display: flex;
`
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: left;
  }
`
const index = () => {
  return (
    <Wrapper>
      <Text
        Text="RECOGNIZING TRUE TALENT WITH DESERVED CANDIDATURE"
        lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
        font
        size="2rem"
        fw="400"
        align="center"
        padding="10vh 0 0 0"
        xmsize="2rem"
        xssize="5vw"
        msize="1.4rem"
      />
      <Container>
        <LeftDiv>
          <div>
            <Text
              Text="Ethical Priciples"
              lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
              font
              size="1.2rem"
              fw="400"
              align="left"
              padding="10vh 0 0 0"
              xmsize="1.2rem"
              xssize="5vw"
              msize="1rem"
            />
            <p>
              With extremely competent resources and consistent efforts of
              improvisation, we thrive for excellence
            </p>
            <img src={"/content/creative.gif"} />
          </div>
        </LeftDiv>
        <RightDiv>
          <p>01</p>
          <Text
            Text="Redefining technology with innovation"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            size="1.2rem"
            fw="400"
            align="left"
            padding="10vh 0 0 0"
            xmsize="1.2rem"
            xssize="5vw"
            msize="1rem"
          />
          <p>
            The Ramaera Family believes in the dynamics of excellence in the
            Industry.
          </p>
          <p>
            We have a flexible approach to any outward opportunity as we
            emphasize the prospect of creation with innovation.
          </p>
        </RightDiv>
      </Container>
    </Wrapper>
  )
}

export default index
