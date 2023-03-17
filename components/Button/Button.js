import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Spinner from "../Spinner"

const StyledButton = styled(motion.button)`
  color: ${(props) => (props.color ? props.color : "#FFFFFF")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  font-weight: ${(props) => (props.fw ? props.fw : "600")};
  line-height: ${(props) => (props.noLineHeight ? "1" : "18px")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "0em")};
  padding: ${(props) =>
    props.secondary ? "2px" : props.padding ? props.padding : "0.85rem 2rem"};
  border-radius: ${(props) =>
    props.br ? props.br : props.secondary ? "1.2rem" : "0.8rem"};
  border: ${(props) => (props.lightBorder ? "2px solid #FFFFFF" : "none")};
  border: ${(props) => (props.bborder ? props.bborder : "none")};
  cursor: pointer;
  min-width: ${(props) =>
    props.width
      ? props.width
      : props.secondaryWidth
      ? props.secondaryWidth
      : "15rem"};
  background: ${(props) =>
    props.bg
      ? props.bg
      : "linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)"};
  margin: ${(props) => (props.m ? props.m : "")};
  height: ${(props) => (props.height ? props.height : "")};
  box-shadow: ${(props) =>
    props.sh
      ? props.sh
      : "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"};

  @media (max-width: 768px) {
    max-width: ${(props) =>
      props.secondarySmall
        ? props.secondarySmall
        : props.navWidth
        ? props.navWidth
        : "15rem"};
    font-size: ${(props) =>
      props.secondary ? "18px" : props.fontSize ? props.fontSize : "18px"};
  }

  @media (max-width: 450px) {
    margin: ${(props) => (props.sm ? props.sm : "")};
  }
`
const ButtonInside = styled.div`
  background: ${(props) => (props.secondaryBg ? props.secondaryBg : "#13132F")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) =>
    props.secondaryBr ? props.secondaryBr : "1.45rem"};
  padding: ${(props) => (props.secondaryP ? props.secondaryP : "0.5rem 2rem")};
  height: ${(props) => (props.Inheight ? props.Inheight : "")};

  @media (max-width: 768px) {
    width: ${(props) => (props.sm ? props.sm : "")};
    padding: ${(props) =>
      props.secondaryPs
        ? props.secondaryPs
        : props.secondaryP
        ? props.secondaryP
        : "0 2rem"};
  }
`

const Button = (props) => {
  const renderContent = () => {
    if (props.loading) {
      return <Spinner />
    }

    return props.Text
  }

  return (
    <StyledButton
      {...props}
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.75 }}
    >
      {/* { props.secondary ? 
            <ButtonInside>
                {renderContent()}
            </ButtonInside>
            : */}
      {renderContent()}
    </StyledButton>
  )
}
export default Button
