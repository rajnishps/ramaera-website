import React from "react"
import styled from "styled-components"
import Text from "../../../../components/Text/Text"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  flex-direction: column;
`
export const ParaContainer = styled.div`
  margin-top: 20px;
  width: 85%;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 85%;
  }
`
const Polygon = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: flex-end;
  top: 5%;
`
const PolyGonImg = styled.img`
  width: 18rem;
  height: 45rem;
  /* position: relative;
   bottom: 20vh; */
  @media (max-width: 600px) {
    width: 8rem;
    height: 22rem;
    opacity: 70%;
  }
`
const Innovation = () => {
  return (
    <>
      <MainContainer>
        <div data-aos="fade-right" data-aos-anchor-placement="top-bottom">
          <Text
            Text="An initiative of today for a perfect tomorrow"
            lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
            font
            size="3.8rem"
            lh="90px"
            width="80rem"
            mwidth="100vw"
            fw="500"
            mlh="50px"
            align="center"
            xmsize="2rem"
            xssize="4vw"
            msize="2rem"
            mpadding="0"
            mmargin=" 2rem 0 2rem 0"
          />
        </div>

        <ParaContainer>
          <div data-aos="fade-left" data-aos-anchor-placement="top-bottom">
            <Text
              Text="Innovation and excellence are our guiding principles and the
        execution of these in technology is helping us to carry out various
        policies that contribute to the upliftment of the society for a
        better tomorrow."
              fw="500"
              size="30px"
              lh="45px"
              width="75rem"
              m="0rem 0 0 0"
              xssize="18px"
              mlh="30px"
              msize="18px"
              miwidth="100vw"
              mwidth="85vw"
              mta="center"
              align="center"
              mmwidth="85vw"
            />
          </div>
        </ParaContainer>

        <Polygon>
          <div data-aos="fade-left" data-aos-anchor-placement="top-bottom">
            <PolyGonImg src={"/background/polygon.png"} />
          </div>
        </Polygon>
      </MainContainer>
    </>
  )
}

export default Innovation
