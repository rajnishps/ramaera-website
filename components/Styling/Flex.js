import React from "react"
import styled from "styled-components"

const Flex = ({
  children,
  column,
  scolumn,
  jc,
  m,
  mcolumn,
  mrcolumn,
  lcolumn,
  width,
}) => {
  const StyledFlex = styled.div`
    display: flex;
    width: ${width ? width : "100%"};
    align-items: center;
    flex-direction: ${column ? "column" : "row"};
    justify-content: ${jc ? jc : "flex-start"};
    margin: ${m ? m : ""};
    position: relative;

    @media (max-width: 1100px) {
      flex-direction: ${column || lcolumn ? "column" : "row"};
    }

    @media (max-width: 768px) {
      flex-direction: ${column || lcolumn || mcolumn ? "column" : "row"};
      flex-direction: ${column || lcolumn || mrcolumn ? "column-reverse" : ""};
    }

    @media (max-width: 450px) {
      flex-direction: ${column || lcolumn || mcolumn || scolumn
        ? "column"
        : "row"};
      flex-direction: ${column || lcolumn || mrcolumn ? "column-reverse" : ""};
    }
  `

  return <StyledFlex>{children}</StyledFlex>
}

export default Flex
