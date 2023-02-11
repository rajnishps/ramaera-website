import React from "react"
import styled from "styled-components"

const Text = (props) => {
  const StyledText = styled.p`
    font-size: ${props.size ? props.size : "22px"};
    color: ${props.color ? props.color : "#ffffff"};
    text-align: ${props.align ? props.align : "left"};
    letter-spacing: ${props.ls ? props.ls : "0em"};
    line-height: ${props.lh ? props.lh : "25px"};
    font-weight: ${props.fw ? props.fw : "bold"};
    margin: ${props.m ? props.m : ""};
    background: ${props.lg
      ? props.lg
      : "linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${props.lg ? "transparent" : ""};
    background-clip: text;
    text-fill-color: transparent;
    font-family: ${props.font ? "personal" : ""} !important;
    width: ${props.width ? props.width : ""};
    opacity: 0.99;
    text-shadow: 0px 20px 20px rgba(0, 0, 0, 0.5);
    padding: ${props.padding ? props.padding : "2vw"};
    &:hover {
      color: ${props.hoverColor ? props.hoverColor : null};
    }

    @media only screen and (max-width: 1200px) {
      font-size: ${props.xmsize ? props.xmsize : "20px"};
    }
    @media only screen and (max-width: 1000px) {
      font-size: ${props.xssize ? props.xssize : "18px"};
    }

    @media only screen and (max-width: 768px) {
      font-size: ${props.msize ? props.msize : "17px"};
      width: ${props.mwidth ? props.mwidth : "100vw;"};
      text-align: ${props.mta ? props.mta : "center"};
      line-height: ${props.mlh && props.mlh};
      padding: ${props.mpadding ? props.mpadding : "2vw"};
      margin: ${props.mmargin ? props.mmargin : ""};
    }
  `
  return <StyledText>{props.Text ? props.Text : "Default Text"}</StyledText>
}

export default Text
