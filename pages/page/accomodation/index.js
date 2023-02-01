import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import TextContainer from "./components/TextContainer"
import { Image, Responsive } from "./components/StyleImage"

const bg = "/background/blank.png"

const Buy = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <PageLayout bg={bg}>
      <PageWidth width="1500px" position="relative">
        <div style={{ width: "100%" }}>
          <img
            src="/content/LineY.png"
            alt=""
            style={{ width: "100%", height: "10rem" }}
          />
          <div
            data-aos="fade-right"
            data-aos-duration="100"
            data-aos-easing="linear"
            data-aos-anchor-placement="top-center"
          >
            <Responsive>
              <TextContainer />
            </Responsive>
          </div>
          <img
            src="/content/LineY.png"
            alt=""
            style={{ width: "100%", height: "10rem" }}
          />
        </div>
        <div
          style={{ position: "absolute", right: "0" }}
          data-aos="fade-left"
          // data-aos-offset="2000"
          data-aos-duration="500"
          data-aos-easing="linear"
          data-aos-anchor-placement="top-center"
        >
          <Image>
            <img
              src="/content/hotel.gif"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Image>
        </div>
      </PageWidth>
    </PageLayout>
  )
}

export default Buy
