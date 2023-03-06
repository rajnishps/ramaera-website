import PageLayout from "../../../../components/PageLayout/PageLay";
import PageWidth from "../../../../components/Width/PageWidth";
import TextContainer from "./components/TextContainer";
import { Image, Responsive } from "./components/StyleImage";
import styled from "styled-components";

const Animdiv = styled.div`
  position: absolute;
  right: 0;
  @media only screen and (max-width: 768px) {
    padding: 0 0 0 5vh;
    margin: 0;
    top: -40vh;
    left: auto;
    right: auto;
  }
  @media only screen and (max-width: 400px) {
    top: -20vh;
  }
`;

const Buy = () => {
  return (
    <PageLayout mmheight="150vh" paddingBottom="0" mtpadding="0" height="100vh">
      <PageWidth full>
        <div style={{ width: "100%" }}>
          <img
            loading="lazy"
            src="/content/LineY.png"
            alt="line"
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
            alt="line"
            style={{ width: "100%", height: "10rem" }}
          />
        </div>
        <Animdiv
          data-aos="slide-left"
          // data-aos-offset="2000"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          <Image>
            <video autoPlay loop muted>
              <source src="/content/e-commerce.webm" type="video/webm" />
            </video>
            {/* <img
              loading="lazy"
              src="/content/e-commerce.gif"
              alt="e commerce gif"
              style={{ width: "90%", height: "100%" }} 
            />*/}
          </Image>
        </Animdiv>
      </PageWidth>
    </PageLayout>
  );
};

export default Buy;
