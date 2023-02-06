import React from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import TextContainer from "./components/TextContainer"
import { Image, Responsive } from "./components/StyleImage"

const bg = "/background/blank.png"

const Buy = () => {
  return (
    <PageLayout>
      <PageWidth scale={"90%"} width="1500px" position="relative">
        <div style={{ width: "100%" }}>
          <img
            loading="lazy"
            src="/content/LineY.png"
            alt=""
            style={{ width: "100%", height: "10rem" }}
          />
          <div
            data-aos="slide-right"
            data-aos-duration="500"
            data-aos-anchor-placement="center-bottom"
          >
            <Responsive>
              <TextContainer />
            </Responsive>
          </div>
          <img
            loading="lazy"
            src="/content/LineY.png"
            alt=""
            style={{ width: "100%", height: "10rem" }}
          />
        </div>
        <div
          style={{ position: "absolute", right: "0" }}
          data-aos="slide-left"
          // data-aos-offset="2000"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          <Image>
            <img
              loading="lazy"
              src="/content/fmcg.gif"
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
