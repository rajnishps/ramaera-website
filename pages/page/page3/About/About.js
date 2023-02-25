import React from "react"
import styled from "styled-components"
import Text from "../../../../components/Text/Text"
import AboutTeam from "./AboutTeam/AboutTeam"
import Trending from "./Trending"
const AboutContainer = styled.div`
  width: 100%;
`
const AboutEnd = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/background/AboutEnd.jpeg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    /* background-size: contain; */
    background-repeat: no-repeat;
    height: 80vh;
  }
`

const About = () => {
  return (
    <>
      <AboutContainer>
        <div data-aos="fade-right">
          <Text
            Text="GET TO KNOW US BETTER"
            lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
            font
            size="2.5rem"
            lh="90px"
            width="100%"
            mwidth="100vw"
            fw="500"
            mlh="50px"
            m="5rem 0 0 0"
            align="center"
            xmsize="2rem"
            xssize="4vw"
            msize="2rem"
            mpadding="0"
            mmargin="0 0 0 0"
          />
        </div>
        <div data-aos="fade-left">
          <Text
            Text="We are focused to endure transparency in each venture of ours as a
        remark of our loyalty to Ramaera Family. We present you with all the
        latest information and wholesome knowledge of operational ventures of
        Ramaera Industries."
            fw="500"
            size="25px"
            lh="45px"
            width="100%"
            padding="0 15vw"
            m="2rem 0 0 0"
            xssize="18px"
            mlh="25px"
            msize="13px"
            mwidth="95%"
            mta="center"
            align="center"
            mmargin="2px 10px 2px 10px"
          />
        </div>
        <Trending />

        <div data-aos="fade-right">
          <AboutTeam />
        </div>
      </AboutContainer>
      <AboutEnd>
        <div data-aos="fade-up">
          <Text
            Text="STANDING STRONG AS A FAMILY"
            lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
            font
            size="7rem"
            lh="154px"
            width="100%"
            mwidth="100vw"
            fw="500"
            mlh="60px"
            m="0rem 0 0 0"
            align="center"
            xmsize="6rem"
            xssize="10vw"
            msize="2.5rem"
            mpadding="0"
            mmargin="0 0 0 0"
          />
        </div>
      </AboutEnd>
    </>
  )
}

export default About
