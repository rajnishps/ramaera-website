import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import TextContainer from "./components/TextContainer"
import { Image, Responsive } from "./components/StyleImage"
import styled from "styled-components"

const Animdiv = styled.div`
  position: absolute;
  right: 0;
  top: 15vh;
  @media only screen and (max-width: 768px) {
    top: 0;
    left: auto;
    right: auto;
    top: -10vh;
  }
`
const IconDiv = styled.div`
  @media only screen and (max-width: 768px) {
    transform: scale(20%);
  }
`

const Buy = () => {
  return (
    <PageLayout>
      <PageWidth scale={"90%"} width="1500px" position="relative">
        <div style={{ width: "100%" }}>
          <IconDiv>
            <img
              //loading="lazy"
              src="/content/LineY.png"
              alt=""
              style={{ width: "100%", height: "10rem" }}
            />
          </IconDiv>
          <div
            data-aos="slide-right"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
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
              src="/content/hotel.gif"
              alt=""
              style={{
                position: "absolute",
                top: "-200px",
                width: "100%",
                height: "100%",
              }}
            />
          </Image>
        </Animdiv>
      </PageWidth>
    </PageLayout>
  )
}

export default Buy
