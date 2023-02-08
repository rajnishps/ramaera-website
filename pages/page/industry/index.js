import React from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import TextContainer from "./components/TextContainer"
import { Image, Responsive } from "./components/StyleImage"
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

const Buy = () => {
  return (
    <PageLayout>
      <PageWidth scale={"90%"} width="1500px" position="relative">
        <div style={{ width: "100%" }}>
          <img
            //loading="lazy"
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
            //loading="lazy"
            src="/content/LineY.png"
            alt=""
            style={{ width: "100%", height: "10rem" }}
          />
        </div>
        <Animdiv
          data-aos="slide-left"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          <Image>
            <img
              //loading="lazy"
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
