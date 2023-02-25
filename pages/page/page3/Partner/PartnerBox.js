import React from "react"
import styled from "styled-components"
import Text from "../../../../components/Text/Text"

const Box = styled.div`
  width: 32%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  @media (max-width: 600px) {
    width: 80%;
    margin: 15% auto;
    height: 20vh;
  }
`
const PartnerBox = ({ Heading, Para }) => {
  return (
    <Box>
      <div data-aos="fade-up">
        <Text
          Text={Heading}
          lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
          font
          size="1.4rem"
          lh="35px"
          width="100%"
          mwidth="100%"
          fw="500"
          mlh="30px"
          xmsize="2rem"
          xssize="4vw"
          msize="1rem"
          mpadding="0rem 0 0 0 "
          padding="4rem 0 0 0"
          mmargin="1rem 0 0 0"
          align="center"
        />
        {/* <BoxHead>{Heading}</BoxHead> */}
      </div>
      <div data-aos="fade-down">
        <Text
          Text={Para}
          fw="400"
          size="0.9rem"
          lh="23px"
          width="100%"
          m="0px auto"
          xssize="18px"
          mlh="25px"
          msize="13px"
          mwidth="90vw"
          mta="center"
          align="center"
        />
        {/* <BoxPara>{Para}</BoxPara> */}
      </div>
    </Box>
  )
}

export default PartnerBox
