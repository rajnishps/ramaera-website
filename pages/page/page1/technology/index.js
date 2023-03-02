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
    <>
      <PageLayout height="125vh">
        <PageWidth scale={"95%"} width="1500px" position="relative">
          <Animdiv
            data-aos="slide-right"
            data-aos-duration="500"
            data-aos-anchor-placement="center-bottom"
          >
            <Image>
              <video
                autoPlay
                loop
                muted
                style={{ width: "115%", height: "115%" }}
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
                alt="line"
                style={{ position: "absolute", width: "100%", height: "10rem" }}
              />
            </Line>
          </div>
        </PageWidth>
      </PageLayout>
    </>
  )
}

export default Buy
