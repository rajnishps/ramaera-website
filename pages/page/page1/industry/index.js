import React from "react";
import PageLayout from "../../../../components/PageLayout/PageLay";
import PageWidth from "../../../../components/Width/PageWidth";
import TextContainer from "./components/TextContainer";
import { Image, Responsive } from "./components/StyleImage";
import styled from "styled-components";

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
`;
const Line = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Buy = () => {
  return (
    <PageLayout
      mmheight="160vh"
      paddingBottom="200px"
      mtpadding="0"
      height="100vh"
    >
      <PageWidth full scale={"95%"} width="1500px" position="relative">
        <div style={{ width: "100%" }}>
          <Line>
            <img
              loading="lazy"
              src="/content/LineY.png"
              alt="line"
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
              alt="line"
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
            <video
              autoPlay
              loop
              muted
              style={{ width: "100%", height: "100%" }}
            >
              <source src="/content/fmcg.webm" type="video/webm" />
            </video>
          </Image>
        </Animdiv>
      </PageWidth>
    </PageLayout>
  );
};

export default Buy;
