import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import TextContainer from "./components/TextContainer"
import { Image, Responsive } from "./components/StyleImage"

const Buy = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <PageLayout height="100vh">
      <PageWidth scale={"90%"} width="1500px" position="relative">
        <div
          data-aos="slide-right"
          data-aos-anchor-placement="center-center"
          data-aos-duration="500"
          style={{
            position: "absolute",
            left: "0",
            bottom: "0",
          }}
        >
          <Image>
            <img
              loading="lazy"
              src="/content/tech.gif"
              alt=""
              style={{
                position: "absolute",
                top: "30vh",
                width: "100%",
                height: "100%",
              }}
            />
          </Image>
        </div>
        <div style={{ width: "100%" }}>
          <img
            loading="lazy"
            src="/background/Line.png"
            alt=""
            style={{ position: "absolute", width: "100%", height: "10rem" }}
          />
          <div
            data-aos="slide-left"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="500"
          >
            <Responsive>
              <TextContainer />
            </Responsive>
          </div>
          <img
            loading="lazy"
            src="/background/Line.png"
            alt=""
            style={{ position: "absolute", width: "100%", height: "10rem" }}
          />
        </div>
      </PageWidth>
    </PageLayout>
  )
}

export default Buy
