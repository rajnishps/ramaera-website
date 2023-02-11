import React from "react"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import TextContainer from "./components/TextContainer"
import { Responsive } from "./components/StyleImage"
import styled from "styled-components"

const Animdiv = styled.div`
  position: absolute;
  right: 0;
  @media only screen and (max-width: 768px) {
    padding: 0;
    margin: 0;
    top: -30vh;
    left: auto;
    right: auto;
  }
`
const Line = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const Image = styled.div`
  height: 27rem;
  width: 31rem;
  @media only screen and (max-width: 768px) {
    margin-top: -25%;
  }
`

const Buy = () => {
  return (
    <PageLayout mtpadding="0">
      <PageWidth scale={"90%"} width="1500px" position="relative">
        <div style={{ width: "100%" }}>
          <Line>
            <img
              loading="lazy"
              src="/content/LineY.png"
              alt=""
              style={{ width: "100%", height: "10rem" }}
            />
          </Line>
          <div
            data-aos="slide-right"
            data-aos-duration="500"
            data-aos-anchor-placement="center-bottom"
          >
            <Responsive>
              <TextContainer />
            </Responsive>
          </div>
          <Line>
            <img
              loading="lazy"
              src="/content/LineY.png"
              alt=""
              style={{ width: "100%", height: "10rem" }}
            />
          </Line>
        </div>
        <Animdiv
          data-aos="slide-left"
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
        </Animdiv>
      </PageWidth>
    </PageLayout>
  )
}

export default Buy
