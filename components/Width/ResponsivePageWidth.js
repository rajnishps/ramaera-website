import styled from "styled-components"

const PageWidth = ({
  children,
  Left,
  full,
  padding,
  margin,
  sp,
  width,
  position,
  scale,
}) => {
  const StyledWidth = styled.section`
    transform: ${scale ? `scale(${scale})` : ""};
    width: ${full ? "100%" : width ? width : "1400px"};
    height: auto;
    display: flex;
    align-items: ${Left ? "left" : "center"};
    justify-content: space-between;
    flex-direction: column;
    padding: ${padding ? padding : "0"};
    margin: ${margin ? margin : "0"};
    position: ${position ? position : "static"};

    @media only screen and (max-width: 1200px) {
      width: 100%;
      margin: 0;
      position: absolute;
      flex-direction: row;
      height: 100vh;
      justify-content: center;
    }
    @media only screen and (max-width: 1000px) {
    }

    @media only screen and (max-width: 768px) {
    }
  `

  return <StyledWidth>{children}</StyledWidth>
}

export default PageWidth
