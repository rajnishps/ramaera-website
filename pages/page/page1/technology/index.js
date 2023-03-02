import PageLayout from "../../../../components/PageLayout/PageLayout";
import PageWidth from "../../../../components/Width/PageWidth";
import TextContainer from "./components/TextContainer";
import { Image, Responsive } from "./components/StyleImage";
import styled from "styled-components";
import NextImage from "next/image";

const Animdiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  @media only screen and (max-width: 768px) {
    left: auto;
    right: auto;
    bottom: 30vh;
  }
`;
const Line = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Buy = () => {
  return (
    <PageLayout height="100vh">
      <Line>
        <img
          loading="lazy"
          src="/background/Line.png"
          alt="line"
          style={{
            position: "absolute",
            width: "100%",
            height: "10rem",
            left: "0",
            top: "0",
          }}
        />
      </Line>
      <PageWidth scale={"90%"} width="1500px" position="relative">
        <Animdiv
          data-aos="slide-right"
          data-aos-anchor-placement="center-center"
          data-aos-duration="500"
        >
          <Image>
            <video
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                top: "16vh",
              }}
            >
              <source src="/content/tech.webm" type="video/webm" />
            </video>
          </Image>
        </Animdiv>
        <div style={{ width: "100%" }}>
          <Line>
            <img
              loading="lazy"
              src="/background/Line.png"
              alt="line"
              style={{
                position: "absolute",
                width: "100%",
                height: "10rem",
              }}
            />
          </Line>
          <div
            data-aos="slide-left"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="500"
          >
            <Responsive>
              <TextContainer />
            </Responsive>
          </div>
        </div>
      </PageWidth>
    </PageLayout>
  );
};

export default Buy;
