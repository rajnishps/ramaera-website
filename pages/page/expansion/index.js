import React, { useEffect } from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import Text from "../../../components/Text/Text"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"

const PolyBg = styled.div`
  left: 0;
  position: absolute;
  z-index: -1;
`
const Image = styled.img`
  height: 70vh;
`

const Buy = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <PageLayout>
        <PageWidth scale={"90%"} width="1500px">
          <div
            data-aos="fade-up"
            data-aos-easing="fade-down"
            data-aos-duration="100"
          >
            <Text
              Text="The Ramaera Expansion"
              lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
              font
              size="65px"
              fw="400"
              align="center"
              lh="55px"
            />
            <Text
              Text="We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT."
              color="#FFF"
              size="30px"
              lh="50px"
              fw="400"
              m="2rem 0 0 0"
              align="center"
              width="1100px"
            />
          </div>
        </PageWidth>
        <PolyBg>
          <Image src={"/background/rightPoly.png"} alt="" />
        </PolyBg>
      </PageLayout>
    </>
  )
}

export default Buy
