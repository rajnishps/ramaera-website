import React, { useState } from "react"
import styled from "styled-components"
import Text from "../../../../components/Text/Text"
import { CustomText } from "./Style"

const StyledTextContainer = styled.div`
  width: 50rem;
  @media (max-width: 1350px) {
    width: 55%;
  }
`
const Stars = styled.div`
  position: absolute;
`
const Star = styled.img`
  height: 16px;
  margin-right: 2px;
  content: url(/content/star.png);
`

const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Quote = styled.img`
  position: absolute;
  top: 220px;
  left: 550px;
`

const Textcontainer = () => {
  const [isActive, setisActive] = useState(false)
  return (
    <StyledTextContainer>
      <Quote src="/content/quote.png" />
      <Text
        Text="Inflation a serious challenge for India`s economic growth: Devendra Mishra`"
        size="52px"
        lh="60px"
        color="#FFF"
        fw="500"
      />
      <CustomText>
        Ramaera Chairman,{" "}
        <span
          style={{ color: "#FFE259" }}
          onMouseMove={() => setisActive(true)}
        >
          Devendra Mishra{" "}
        </span>{" "}
        said that for India to stay on the growth trajectory, a triple decker
        strategy focused on employment generation...
      </CustomText>
      {isActive ? (
        <Bg>
          <div onMouseMove={() => setisActive(false)}>
            <Text
              Text="Devendra Mishra"
              lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
              font
              size="75px"
              fw="400"
              align="center"
              lh="55px"
            />
          </div>
        </Bg>
      ) : null}
      <Stars>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <Text
          Text="Financial Express"
          size="22px"
          lh="60px"
          color="#FFF"
          fw="500"
        />
      </Stars>
    </StyledTextContainer>
  )
}

export default Textcontainer
