import React from "react"
import styled from "styled-components"

const Dot = styled.div`
  margin-bottom: 12px;
  height: 8px;
  width: 8px;
  border-radius: 10px;
  background: linear-gradient(180deg, #ffe059 0%, #ffb253 100%);
`
const StyledDotsContainer = styled.div`
  position: absolute;
  left: 15vw;
  padding-bottom: 20px;
  display: flex;
  gap: 15px;
`
const Dots = () => {
  return (
    <StyledDotsContainer>
      <div>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
      <div>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
      <div>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
    </StyledDotsContainer>
  )
}

export default Dots
