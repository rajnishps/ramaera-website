import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import TextContainer from "./components/TextContainer"
import { Image, Responsive } from "./components/StyleImage"
import styled from "styled-components"
import NextImage from "next/image"

const Animdiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  @media only screen and (max-width: 768px) {
    left: auto;
    right: auto;
    bottom: 30vh;
  }
`
const Buy = () => {
  return (
    <PageLayout height="100vh">
      <PageWidth scale={"90%"} width="1500px" position="relative">
        <Animdiv
          data-aos="slide-right"
          data-aos-anchor-placement="center-center"
          data-aos-duration="500"
        >
          <Image>
            <NextImage
              loading="lazy"
              src="/content/tech.gif"
              alt=""
              width={100}
              height={100}
              style={{
                position: "absolute",
                top: "35vh",
                width: "100%",
                height: "100%",
              }}
            />
          </Image>
        </Animdiv>
        <div style={{ width: "100%" }}>
          <img
            loading="lazy"
            src="/background/Line.png"
            alt=""
            style={{ position: "absolute", width: "100%", height: "10rem" }}
          />
          <div
            data-aos="slide-left"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="500"
          >
            <Responsive>
              <TextContainer />
            </Responsive>
          </div>
          <img
            loading="lazy"
            src="/background/Line.png"
            alt=""
            style={{ position: "absolute", width: "100%", height: "10rem" }}
          />
        </div>
      </PageWidth>
    </PageLayout>
  )
}

export default Buy
