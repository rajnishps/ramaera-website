import React, { useState, useEffect } from "react"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import Text from "../../../../components/Text/Text"
import Button from "../../../../components/Button/Button"
import SocialMedia from "./components/SocialMedia/SocialMedia"
import {
  images,
  text,
  images2,
  text2,
  images3,
  text3,
} from "./components/Style"
import Tab from "./components/Tab/Tab"
import styled from "styled-components"
const SmallSize = styled.div`
  transform: scale(80%);
`

const pageNo = [images, images2, images3]
const textNo = [text, text2, text3]
const index = ({ imageIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageNo, setImageNo] = useState(pageNo[imageIndex])
  const [contextNo, setContextNo] = useState(textNo[imageIndex])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === imageNo.length - 1) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 2200)

    return () => clearInterval(intervalId)
  }, [imageNo[currentIndex]])

  return (
    <PageLayout bg={imageNo[currentIndex]} bgColor="#fff" Zindex="-2">
      <SmallSize>
        <PageWidth width="1500px" padding="8rem 0 0 0" position="relative">
          <Text
            Text="Ramaera Industries"
            lg="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
            font
            size="96px"
            lh="125px"
            width="50rem"
            fw="500"
            align="center"
            xmsize="6rem"
            xssize="10vw"
            msize="4rem"
          />

          {contextNo[currentIndex]}
          <div>
            <Button
              Text="Explore more"
              secondary
              lightborder
              height="60px"
              m="2rem 0 0 0"
            />
          </div>
          <img
            //loading="lazy"
            src="/background/bottom.png"
            alt=""
            style={{ height: "7rem", width: "9.5rem", margin: "1rem 0 0 0" }}
          />
        </PageWidth>
      </SmallSize>
      <SocialMedia />
      <Tab currentIndex={currentIndex} />
    </PageLayout>
  )
}

export default index
