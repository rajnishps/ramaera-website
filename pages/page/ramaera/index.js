import React, { useState, useEffect } from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import Text from "../../../components/Text/Text"
import Button from "../../../components/Button/Button"
import SocialMedia from "./components/SocialMedia/SocialMedia"
import { images, text } from "./components/Style"
import Tab from "./components/Tab/Tab"

const index = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 2200)

    return () => clearInterval(intervalId)
  }, [images[currentIndex]])

  return (
    <PageLayout bg={images[currentIndex]} bgColor="#fff" Zindex="-2">
      <PageWidth width="1500px" padding="8rem 0 0 0" position="fixed">
        <Text
          Text="Ramaera Industries"
          lg="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
          font
          size="96px"
          lh="125px"
          width="50rem"
          fw="500"
          align="center"
        />

        {text[currentIndex]}

        <Button
          Text="Explore more"
          secondary
          lightBorder
          height="60px"
          m="2rem 0 0 0"
        />
        <img
          src="/background/bottom.png"
          alt=""
          style={{ height: "7rem", width: "9.5rem", margin: "1rem 0 0 0" }}
        />
      </PageWidth>
      <SocialMedia />
      <Tab currentIndex={currentIndex} />
    </PageLayout>
  )
}

export default index
