import React, { useState, useEffect } from "react"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import Text from "../../../../components/Text/Text"
import Button from "../../../../components/Button/Button"
import SocialMedia from "./components/SocialMedia/SocialMedia"
import MobileSocials from "./components/MobileSocials/MobileSocials"
import MobileTab from "./components/MobileTab/MobileTab"
import { Fragment } from "react"

import {
  images,
  text,
  images2,
  text2,
  images3,
  text3,
  images4,
  text4,
} from "./components/Style"
import Tab from "./components/Tab/Tab"
import styled from "styled-components"
import Image from "next/image"
const SmallSize = styled.div`
  transform: scale(80%);
`
const LinkTo = styled.a`
  cursor: pointer;
`
const RotateTab = styled.div`
  @media only screen and (max-width: 768px) {
    /*  transform: scale(100%);
    transform: rotateZ(90deg);
    margin-right: auto;
    margin-left: auto; */
    display: none;
  }
`
const TabsWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    transform: scale(70%);
  }
`
const RotateSocials = styled.div`
  @media only screen and (max-width: 768px) {
    /*  transform: rotateZ(90deg);
    margin-left: 50%;
    margin-top: 0vh; */
    display: none;
  }
`
const ImageHide = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const pageNo = [images, images2, images3, images4]
const textNo = [text, text2, text3, text4]
const index = ({ imageIndex = 0 }) => {
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
    }, 5000)

    return () => clearInterval(intervalId)
  }, [imageNo[currentIndex]])

  return (
    <Fragment>
      <PageLayout bgColor="#fff">
        <div>
          <Image
            src={imageNo[currentIndex]}
            alt="background image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <SmallSize>
            <PageWidth width="1500px" padding="8rem 0 0 0" position="relative">
              <Text
                Text="Ramaera Industries"
                lg="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
                font
                size="96px"
                lh="125px"
                width="50rem"
                mwidth="100vw"
                fw="500"
                mlh="80px"
                align="center"
                xmsize="6rem"
                xssize="10vw"
                msize="13vmin"
                mmargin=" 0 0 2rem 0"
              />

              {contextNo[currentIndex]}
              <LinkTo href={"#" + imageIndex}>
                <Button
                  Text="Explore more"
                  secondary
                  lightborder
                  height="60px"
                  m="2rem 0 0 0"
                />
              </LinkTo>
              <ImageHide>
                <img
                  loading="lazy"
                  src="/background/bottom.png"
                  alt="background bottom"
                  style={{
                    height: "7rem",
                    width: "9.5rem",
                    margin: "1rem 0 0 0",
                  }}
                />
              </ImageHide>
            </PageWidth>
          </SmallSize>
          <RotateSocials>
            <SocialMedia />
          </RotateSocials>
          <RotateTab>
            <Tab currentIndex={currentIndex} />
          </RotateTab>
        </div>
      </PageLayout>
      <MobileSocials />
      <TabsWrapper>
        <MobileTab currentIndex={currentIndex} />
      </TabsWrapper>
    </Fragment>
  )
}

export default index
