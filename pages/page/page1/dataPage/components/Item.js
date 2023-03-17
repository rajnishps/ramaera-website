import React from "react"
import styled from "styled-components"
import Heading from "../../../../../components/Heading/Heading"
import Text from "../../../../../components/Text/Text"

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 14rem;
  height: 8rem;
  transform: scale(0.8);
`
const Item = (props) => {
  return (
    <StyledItem>
      <img
        loading="lazy"
        src={props.img ? props.img : ""}
        alt={props.img}
        style={{ height: "4.6rem", width: "5rem" }}
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
        padding="0 2vw "
        fw="300"
      />
    </StyledItem>
  )
}

export default Item
