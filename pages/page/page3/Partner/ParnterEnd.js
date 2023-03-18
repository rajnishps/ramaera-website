import React from "react"
import styled from "styled-components"
import Text from "../../../../components/Text/Text"
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
const RightImgBox = styled.div`
  width: 40%;
  @media (max-width: 1200px) {
    margin: 0px 15vw 0  0;
  }
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
const RightVideo = styled.video`
  @media (max-width: 600px) {
    width: 100%;
  }
`
const ParnterEnd = () => {
  return (
    <ParnterEndBox>
      <LeftPara>
        <div 
        //data-aos="fade-up-right"
        data-aos="slide-right"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
        >
          <Text
            Text=" To make this investor relation transparent , we will provide complete
        insights on the project gain and other relevant information. So what
        are you waiting for, enrol yourself as a partner with successful
        Ramaera Projects for a promised sustainable output today and tomorrow."
            fw="500"
            size="23px"
            lh="45px"
            width="100%"
            m="2rem 0 0 0"
            xssize="18px"
            mlh="25px"
            msize="13px"
            mwidth="85vw"
            mta="center"
            align="center"
            mmwidth="85vw"
          />
        </div>
        <div 
       // data-aos="fade-up-right" data-aos="slide-right"
       data-aos="slide-right"
       data-aos-duration="1000"
       data-aos-anchor-placement="top-bottom"
        >
          <Text
            Text="Ramaera Industries are bringing out collaborative opportunities where
        you can become a part of a major Ramaera project by investing a
        minimal amount. This investment will benefit you by providing a
        monthly return on investment."
            fw="500"
            size="23px"
            lh="45px"
            width="100%"
            m="0rem 0 0 0"
            xssize="18px"
            mlh="25px"
            msize="13px"
            mwidth="85vw"
            mta="center"
            align="center"
            mmwidth="85vw"
          />
        </div>
      </LeftPara>
      <RightImgBox>
        <div 
        //data-aos="fade-up-left"
        data-aos="slide-left"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-bottom"
        >
          <RightVideo autoPlay loop muted>
            <source src="/background/Partner.webm" type="video/webm" />
          </RightVideo>
          {/*           <RightImg src={"/background/Partner.gif"} />
           */}{" "}
        </div>
      </RightImgBox>
    </ParnterEndBox>
  )
}

export default ParnterEnd
