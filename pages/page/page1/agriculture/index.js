import React from "react"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import TextContainer from "./components/TextContainer"
import { Image, Responsive } from "./components/StyleImage"
import styled from "styled-components"

const AgriPos = styled.img`
  position: absolute;
  width: 100%;
  height: 110%;
  left: -5vh;
  top: 10vh;
  @media only screen and (max-width: 768px) {
    top: -55vh;
  }
`
const Buy = () => {
  return (
    <PageLayout>
      <PageWidth scale={"90%"} width="1500px" position="relative">
        <div
          data-aos="slide-right"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
          style={{
            position: "absolute",
            left: "0",
            margin: "0 0 0 0",
          }}
        >
          <Image>
            <AgriPos
              loading="lazy"
              src="/content/agri.gif"
              alt="agriculture gif"
            />
          </Image>
        </div>
        <div style={{ width: "100%" }}>
          <img
            loading="lazy"
            src="/background/Line.png"
            alt="line"
            style={{ position: "absolute", width: "100%", height: "10rem" }}
          />
          <div
            data-aos="slide-left"
            // data-aos-offset="2000"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
          >
            <Responsive>
              <TextContainer />
            </Responsive>
          </div>
          <img
            loading="lazy"
            src="/background/Line.png"
            alt="line"
            style={{ position: "absolute", width: "100%", height: "10rem" }}
          />
        </div>
      </PageWidth>
    </PageLayout>
  )
}

export default Buy
