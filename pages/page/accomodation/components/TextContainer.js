import React from "react"
import styled from "styled-components"
import Heading from "../../../../components/Heading/Heading"
import Flex from "../../../../components/Styling/Flex"
import Text from "../../../../components/Text/Text"

const StyleTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  // background: red;
  width: 50rem;
  margin: 5rem 0 -5rem 0;
`
const TextContainer = () => {
  return (
    <StyleTextContainer>
      <Flex>
        <img
          src="/content/y.png"
          alt=""
          style={{
            height: "6.75rem",
            width: "7rem",
            borderRadius: "50%",
            margin: "0 2rem 0 0",
          }}
        />
        <div>
          <Text
            Text="Making"
            size="42px"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%);"
            lh="55px"
          />
          <Text
            Text="accommodations easier"
            size="42px"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%);"
            lh="55px"
          />
        </div>
      </Flex>
      <Text
        Text="Introducing capsule hotels in places of extreme need such as examination centres and hospitals to provide comfortable and convenient accommodation at pocket friendly prices ."
        fw="500"
        size="23px"
        lh="45px"
        width="40rem"
        m="2rem 0 0 0"
      />
    </StyleTextContainer>
  )
}

export default TextContainer
