import React from "react"
import styled from "styled-components"
import Text from "../../../../../components/Text/Text"
import {
  RightContainer,
  ImgBg,
  Heading,
  ReverseText,
  Info,
  InfoContainer,
  InfoHead,
  InfoPara,
} from "../Components/style"
const Right = () => {
  return (
    <div style={{ width: "70%" }}>
      <RightContainer>
        <div data-aos="fade-left">
          <ImgBg>
            <div data-aos="fade-up">
              <Text
                Text="Ramaera Industries"
                lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
                font
                size="2.5rem"
                lh="45px"
                width="71%"
                mwidth="95%"
                fw="500"
                m="0px auto"
                mlh="25px"
                xmsize="2rem"
                xssize="4vw"
                msize="1rem"
                mpadding="0rem 0 0 1rem"
                padding="0 0 0 0rem"
                mmargin="0rem 0 0 0"
                align="center"
              />
              {/* <Heading>
            Ramaera <br /> Industries
          </Heading> */}
            </div>

            <ReverseText src={"/background/reverse.png"} />
            <Info>
              <InfoContainer>
                <div style={{ margin: "0px 20px" }}>
                  <div data-aos="fade-right">
                    <InfoHead>200+</InfoHead>
                    <InfoPara>Ramaera Group Direct Employees</InfoPara>
                  </div>
                </div>
                <div>
                  <div data-aos="fade-right">
                    <InfoHead>1000</InfoHead>
                    <InfoPara>FMCG Upcoming Mother Brands</InfoPara>
                  </div>
                </div>
              </InfoContainer>
              <InfoContainer>
                <div style={{ margin: "0px 20px" }}>
                  <div data-aos="fade-left">
                    <InfoHead>15000+</InfoHead>
                    <InfoPara>Community Members</InfoPara>
                  </div>
                </div>
                <div>
                  <div data-aos="fade-left">
                    <InfoHead>15</InfoHead>
                    <InfoPara>States Reach</InfoPara>
                  </div>
                </div>
              </InfoContainer>
            </Info>
          </ImgBg>
        </div>
      </RightContainer>
    </div>
  )
}

export default Right
