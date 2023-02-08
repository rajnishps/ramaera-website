import React, { useState } from "react"
import styled from "styled-components"

export const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  // background: #00000095;
  //box-shadow: 34px 34px 68px #bebebe, -34px -34px 68px #ffffff;
  /* ff 3.6+ */
  background: -moz-radial-gradient(
    ellipse at 50% 50%,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.7) 22%,
    rgba(0, 0, 0, 0.5) 32%,
    rgba(0, 0, 0, 0.5) 42%,
    rgba(255, 255, 255, 0.3) 60% rgba(255, 255, 255, 0.05) 70%
      rgba(255, 255, 255, 0) 75%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.7) 22%,
    rgba(0, 0, 0, 0.5) 32%,
    rgba(0, 0, 0, 0.3) 42%,
    rgba(255, 255, 255, 0) 60%
  );

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`

const StyledImageContainer = styled.div`
  @media (max-width: 768px) {
    transform: scale(70%);
  }
`

const MainImg = styled.div`
  transform: scale(80%);
  width: 30rem;
  height: 40rem;
  @media (max-width: 1350px) {
    width: 25rem;
    height: 33rem;
  }
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
`
const TeamImg = styled.div`
  transform: scale(80%);

  width: 18rem;
  height: 10rem;
  position: absolute;
  bottom: 0;
  right: -4rem;
  @media (max-width: 768px) {
    right: auto;
  }
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
  @media (max-width: 768px) {
    width: 38rem;
    height: 50rem;
  }
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
  @media (max-width: 768px) {
    width: 150%;
    height: 55%;
  }
`
const Img = styled.div`
  position: relative;
`

const Imagecontainer = () => {
  const [isActive, setisActive] = useState(false)
  const [isActive1, setisActive1] = useState(false)
  return (
    <StyledImageContainer
      onMouseLeave={() => (setisActive(false), setisActive1(false))}
    >
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
