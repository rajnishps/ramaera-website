import styled from "styled-components"
import Text from "../../../../../components/Text/Text"

const Txt = styled.div`
  height: 100%;
  text-transform: uppercase;
  margin-top: auto;
  margin-bottom: auto;
`
const Bg = styled.div`
  display: flex;
  background-image: url("/background/bg1p2.png");
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 100vh;
  width: 100vw;
  margin-top: 20vh;
  z-index: -1;
  @media only screen and (max-width: 768px) {
    background: transparent;
    flex-direction: column-reverse;
  }
`
const AgriPos = styled.video`
  height: 75vh;
  margin-left: -80px;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    height: 50vh;
  }
`

const PolyBg = styled.div`
  @media only screen and (max-width: 1000px) {
    opacity: 50%;
  }
  @media only screen and (max-width: 786px) {
    display: none;
  }
`
const Image = styled.img`
  height: 70vh;
`
const CustomBg = () => {
  return (
    <div id="technology">
      <div
        data-aos="slide-left"
        data-aos-duration="200"
        data-aos-anchor-placement="top-bottom"
      >
        <Bg>
          <div
            data-aos="slide-right"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
          >
            <div>
              <AgriPos autoPlay loop muted>
                <source src="/content/tech.webm" type="video/webm" />
              </AgriPos>
              {/* <AgriPos
                loading="lazy"
                src="/content/tech.gif"
                alt="technology gif"
              /> */}
            </div>
          </div>
          <Txt>
            <Text
              Text="Information Technology"
              font
              align="left"
              size="42px"
              lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
              lh="55px"
              mlh="50px"
              mwidth="95vw"
              mpadding="0"
              xmsize="2rem"
              xssize="3vw"
              msize="2.4rem"
            />
          </Txt>
        </Bg>
      </div>
      <div
        data-aos="slide-left"
        data-aos-duration="100"
        data-aos-anchor-placement="top-bottom"
        style={{
          position: "absolute",
          right: "0",
          top: "130%",
          zIndex: "-2",
        }}
      >
        <PolyBg>
          <Image src={"/background/p2poly.png"} alt="polygon background" />
        </PolyBg>
      </div>
    </div>
  )
}

export default CustomBg
