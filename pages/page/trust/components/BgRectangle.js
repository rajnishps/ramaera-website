import React from "react"
import styled from "styled-components"

const BgWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`

const Bg = styled.div`
  position: absolute;
  left: 22.5%;
  top: 45vh;
  width: 55vw;
  height: 40vh;
  background: linear-gradient(282.22deg, #e8c952 15.22%, #eba14f 85.08%);
  border: 2px solid #ffffff;
  border-radius: 24px;
`
const BgRectangle = () => {
  return (
    <>
      <BgWrapper>
        <Bg />
      </BgWrapper>
    </>
  )
}

export default BgRectangle
