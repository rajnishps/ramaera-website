import React from "react";
import PageLayout from "../../../../components/PageLayout/PageLayout";
import PageWidth from "../../../../components/Width/PageWidth";
import TextContainer from "./components/TextContainer";
import { Image, Responsive } from "./components/StyleImage";
import styled from "styled-components";

const AgriPos = styled.video`
  position: absolute;
  width: 100%;
  height: 110%;
  left: -5vh;
  top: 10vh;
  @media only screen and (max-width: 768px) {
    width: 110vw;
    top: -55vh;
    margin: 0 auto;
  }
`;
const Buy = () => {
  return (
    <PageLayout height="100vh">
      <PageWidth scale={"95%"} width="1500px" position="relative">
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
            <AgriPos autoPlay loop muted>
              <source src="/content/agri.webm" type="video/webm" />
            </AgriPos>
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
  );
};

export default Buy;
