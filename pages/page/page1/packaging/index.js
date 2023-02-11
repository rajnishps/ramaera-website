import React from "react"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import TextContainer from "./components/TextContainer"
import { Image, Responsive } from "./components/StyleImage"
import styled from "styled-components"

const Animdiv = styled.div`
  position: absolute;
  left: 0;
  margin: 10vh 0 0 0;
  @media only screen and (max-width: 768px) {
    left: auto;
    right: auto;
    bottom: 20vh;
  }
`
const Line = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const Buy = () => {
  return (
    <PageLayout>
      <PageWidth scale={"90%"} width="1500px" position="relative">
        <Animdiv
          data-aos="slide-right"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
        >
          <Image>
            <img
              loading="lazy"
              src="/content/Packaging.gif"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Image>
        </Animdiv>
        <div style={{ width: "100%" }}>
          <Line>
            <img
              loading="lazy"
              src="/background/Line.png"
              alt=""
              style={{ position: "absolute", width: "100%", height: "10rem" }}
            />
          </Line>
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
          <Line>
            <img
              loading="lazy"
              src="/background/Line.png"
              alt=""
              style={{ position: "absolute", width: "100%", height: "10rem" }}
            />
          </Line>
        </div>
      </PageWidth>
    </PageLayout>
  )
}

export default Buy
