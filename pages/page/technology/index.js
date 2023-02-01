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
    <PageLayout bg={bg} height="100%">
      <PageWidth width="1500px" position="relative">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          style={{
            position: "absolute",
            left: "0",
            bottom: "0",
            overflowY: "hidden",
          }}
        >
          <Image>
            <img
              src="/content/tech.gif"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Image>
        </div>
        <div style={{ width: "100%" }}>
          <img
            src="/background/Line.png"
            alt=""
            style={{ width: "100%", height: "10rem" }}
          />
          <div data-aos="fade-left" data-aos-duration="500">
            <Responsive>
              <TextContainer />
            </Responsive>
          </div>
          <img
            src="/background/Line.png"
            alt=""
            style={{ width: "100%", height: "10rem" }}
          />
        </div>
      </PageWidth>
    </PageLayout>
  )
}

export default Buy
