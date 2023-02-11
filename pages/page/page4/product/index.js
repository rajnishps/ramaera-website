import styled from "styled-components"
import Position from "../common/position"

const PositionWrapper = styled.div``
const Heading = styled.h2``
const index = () => {
  return (
    <PositionWrapper>
      <Heading>Product</Heading>
      <Position
        role={"PRODUCT MANAGER"}
        place={"Noida, IN"}
        work={"Full Time"}
        description={
          "We are looking for multi-skilled candidates with excellent interpersonal skills for the position of Product Manager. Product Managers improve customer experiences, generate new product ideas, and outline detailed product strategies, among other duties."
        }
      />
      <Position
        role={"UX Designer "}
        place={"Noida, IN"}
        work={"Full Time"}
        description={
          "We are looking for a dynamic UI/UX designer who will be responsible for the user experience (UX) and user interface (UI) design of our various digital assets. You will ensure that all elements of the online user experience are optimised for improved usability, usefulness, and exceptional visual design."
        }
      />
    </PositionWrapper>
  )
}

export default index
