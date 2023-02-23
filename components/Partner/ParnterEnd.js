import React from "react"
import styled from "styled-components"
const ParnterEndBox = styled.div`
  width: 95%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const LeftPara = styled.div`
  width: 60%;
  @media (max-width: 600px) {
    width: 90%;
  }
`
const ParaGraph = styled.p`
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 43px;
  letter-spacing: 0.04em;
  color: white;
  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 30px;
  }
`
const RightImgBox = styled.div`
  width: 40%;
  @media (max-width: 600px) {
    width: 90%;
    margin: 0px auto;
  }
`
const RightImg = styled.img`
  @media (max-width: 600px) {
    width: 100%;
  }
`
const ParnterEnd = () => {
  return (
    <ParnterEndBox>
      <LeftPara>
        <ParaGraph>
          To make this investor relation transparent , we will provide complete
          insights on the project gain and other relevant information. So what
          are you waiting for, enrol yourself as a partner with successful
          Ramaera Projects for a promised sustainable output today and tomorrow.
        </ParaGraph>
        <br />
        <ParaGraph>
          Ramaera Industries are bringing out collaborative opportunities where
          you can become a part of a major Ramaera project by investing a
          minimal amount. This investment will benefit you by providing a
          monthly return on investment.
        </ParaGraph>
      </LeftPara>
      <RightImgBox>
        <RightImg alt="Partner gif" src={"/background/Partner.gif"} />
      </RightImgBox>
    </ParnterEndBox>
  )
}

export default ParnterEnd
