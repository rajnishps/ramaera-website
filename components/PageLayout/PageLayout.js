import React from "react"
import styled from "styled-components"

const StyledPageLayout = styled.section`
  //min-width: 100vh;
  min-height: ${(props) => (props.height ? height : "100vh")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.start ? "flex-start" : "center")};
  flex-direction: column;
  padding-top: ${(props) => (props.padding ? padding : "calc(1rem + 1rem)")};
  background-color: ${(props) => props.bgColor && "#000"};
  background-image: url(${(props) => props.bg && ""});
  background-size: ${(props) => (props.adjustBg ? "100% auto" : "100% 100%")};
  background-repeat: no-repeat;
  position: relative;
  background-position: center center;
  overflow-x: hidden;
  overflow-y: ${(props) => (props.Y ? "hidden" : "")};
  z-index: ${(props) => (props.Zindex ? Zindex : "1")};

  @media (max-width: 1200px) {
    background-size: ${(props) => (props.adjustBg ? "100% auto" : "auto 100%")};
    background-position: ${(props) =>
      props.adjustBg ? "center center" : "center top"};
  }

  @media (max-width: 768px) {
    min-height: 100%;
  }
`
const PageLayout = ({ children }) => {
  return <StyledPageLayout>{children}</StyledPageLayout>
}

export default PageLayout
