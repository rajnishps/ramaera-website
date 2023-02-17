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
    top: -30vh;
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
      <PageWidth sp="0" scale={"90%"} width="1500px" position="relative">
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
            data-aos-anchor-placement="top-bottom"
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
              src="/content/hotel.gif"
              alt=""
              style={{
                position: "absolute",
                top: "-200px",
                width: "90%",
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
