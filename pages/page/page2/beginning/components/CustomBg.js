import styled from "styled-components"
import Text from "../../../../../components/Text/Text"

const Txt = styled.div`
  z-index: 10;
  position: absolute;
  top: 70%;
  width: 70vw;
  text-transform: uppercase;
  left: 60%;
  transform: translate(-50%, -50%);
`
const Bg = styled.div`
  background-image: url("/background/bg1p2.png");
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 80vh;
  width: 100vw;
  margin-top: 20vh;
  z-index: -1;
  @media only screen and (max-width: 1200px) {
    background: transparent;
  }
`
const AgriPos = styled.img`
  height: 75vh;
  position: absolute;
  top: 65vh;
  @media only screen and (max-width: 768px) {
  }
`

const CustomBg = () => {
  return (
    <>
      <Txt>
        <Text
          Text="Information Technology"
          font
          align="right"
          size="42px"
          lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
          lh="55px"
          mlh="30px"
          xmsize="2rem"
          xssize="3vw"
          msize="2rem"
          mta="right"
        />
      </Txt>
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
        <div>
          <AgriPos
            //loading="lazy"
            src="/content/tech.gif"
            alt=""
          />
        </div>
      </div>
      <Bg />
    </>
  )
}

export default CustomBg
