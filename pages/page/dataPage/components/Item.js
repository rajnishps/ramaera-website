import React from "react"
import styled from "styled-components"
import Heading from "../../../../components/Heading/Heading"
import Text from "../../../../components/Text/Text"

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15rem;
`
const Item = (props) => {
  return (
    <StyledItem>
      <img
        src={props.img ? props.img : ""}
        alt=""
        style={{ height: "4rem", width: "4.25rem" }}
      />
      <Heading
        Text={props.number ? props.number : ""}
        size="29px"
        lh="35.35px"
        color="#FFF"
        m="1rem 0"
      />
      <Text
        Text={props.desc ? props.desc : ""}
        size="14px"
        lh="17.07px"
        color="#FFF"
        align="center"
      />
    </StyledItem>
  )
}

export default Item
