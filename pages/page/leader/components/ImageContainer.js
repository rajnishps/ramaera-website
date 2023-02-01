import React, { useState } from "react"
import styled from "styled-components"

export const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  background: #00000095;
  box-shadow: 34px 34px 68px #bebebe, -34px -34px 68px #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`

const StyledImageContainer = styled.div``

const MainImg = styled.div`
  width: 30rem;
  height: 40rem;
  @media (max-width: 1350px) {
    width: 25rem;
    height: 33rem;
  }
`
const TeamImg = styled.div`
  width: 18rem;
  height: 10rem;
  position: absolute;
  bottom: 0;
  right: -4rem;
`
const HoverImage = styled.div`
  width: 30rem;
  height: 40rem;
  background-image: url("/content/p.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`

const HoverImageTeam = styled.div`
  width: 60%;
  height: 25rem;
  background-image: url("/content/bt.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  @media (max-width: 1350px) {
    width: 75%;
    height: 28rem;
  }
`
const Img = styled.div`
  position: relative;
`

const Imagecontainer = () => {
  const [isActive, setisActive] = useState(false)
  const [isActive1, setisActive1] = useState(false)
  return (
    <StyledImageContainer>
      <Img>
        <MainImg
          onMouseMove={() => setisActive(true)}
          // onMouseLeave={()=> setisActive(false)}
        >
          <img
            src="/content/p.png"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </MainImg>
        <TeamImg
          onMouseMove={() => setisActive1(true)}
          //onMouseLeave={()=> setisActive1(false)}
        >
          <img
            src="/content/t.png"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </TeamImg>
      </Img>
      <HoverImage
        initial={{ x: 0, y: -200 }}
        onMouseMove={() => setisActive(false)}
        animate={isActive ? { x: 0, y: 0 } : { x: 0, y: -2000000 }}
        transition={{ duration: 1.5 }}
        style={{ display: `${isActive ? "block" : "none"}` }}
      />
      <HoverImageTeam
        // initial={{ x: 0, y:-200}}
        onMouseMove={() => setisActive1(false)}
        // animate={isActive1 ? {x: 0,y:0} : { x: 0, y:-2000000 } }
        // transition={{ duration: 1.5}}
        style={{ display: `${isActive1 ? "block" : "none"}` }}
      />
      {isActive || isActive1 ? <Bg /> : null}
    </StyledImageContainer>
  )
}

export default Imagecontainer
