import styled from "styled-components";

const PageWidth = ({
  children,
  Left,
  full,
  padding,
  margin,
  sp,
  height,
  width,
  position,
  scale,
  overflow,
  df,
  bg,
}) => {
  const StyledWidth = styled.section`
    transform: ${scale ? `scale(${scale})` : ""};
    background: ${bg ? bg : ""};
    width: ${full ? "100%" : width ? width : "1400px"};
    height: ${height ? height : "auto"};
    display: flex;
    display: ${df ? df : "flex"};
    align-items: ${Left ? "left" : "center"};
    justify-content: space-between;
    flex-direction: column;
    padding: ${padding ? padding : "0"};
    margin: ${margin ? margin : "0"};
    position: ${position ? position : "static"};
    overflow: ${overflow ? overflow : ""};

    @media only screen and (max-width: 1600px) {
      width: ${full ? "100%" : "95%"};
    }
    @media only screen and (max-width: 1400px) {
      width: ${full ? "100%" : "100%"};
    }
    @media only screen and (max-width: 540px) {
      width: 100%;
      padding: ${sp ? sp : "0 1rem"};
    }
  `;

  return <StyledWidth>{children}</StyledWidth>;
};

export default PageWidth;
