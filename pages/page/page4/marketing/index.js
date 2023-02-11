import styled from "styled-components"
import Position from "../common/position"

const PositionWrapper = styled.div``
const Heading = styled.h2``
const index = () => {
  return (
    <PositionWrapper>
      <Heading>Marketing</Heading>
      <Position
        role={"Senior Copywriter"}
        place={"Noida, IN"}
        work={"Full Time"}
        description={
          "We are seeking a creative and enthusiastic Copywriter to join our awesome Marketing team  If you are creative  innovative and energetic, and if you love attracting people with your writing we want you in our team"
        }
      />
      <Position
        role={"Junior Copywriter"}
        place={"Noida, IN"}
        work={"Full Time"}
        description={
          "We are looking for a Copywriter intern who is a professional who writes clear, concise copy for ads and marketing materials. They work closely alongside web and graphic designers to ensure their message is clear, whether in an email inbox or a website landing page."
        }
      />
    </PositionWrapper>
  )
}

export default index
