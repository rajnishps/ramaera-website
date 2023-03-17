import styled from "styled-components";
import Text from "../../../../../components/Text/Text";

const Txt = styled.div`
  height: 100%;
  text-transform: uppercase;
  margin-top: auto;
  margin-bottom: auto;
`;
const Bg = styled.div`
  display: flex;
  background-image: url("/background/bg-consumer.png");
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 1000px;
  min-height: 500px;
  width: 100vw;
  margin-top: 20vh;
  margin-bottom: -300px;
  z-index: -1;
  @media only screen and (max-width: 768px) {
    height: auto;
    margin-top: 0;
    margin-bottom: unset;
    width: 100%;
    background: transparent;
    flex-direction: column-reverse;
  }
`;
const AgriPos = styled.video`
  transform: scale(0.8);
  height: 75vh;
  min-height: 450px;
  @media only screen and (max-width: 768px) {
    height: 50vh;
    min-height: unset;
  }
`;

const CustomBg = () => {
  return (
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
              <source src="/content/fmcg.webm" type="video/webm" />
            </AgriPos>
            {/* <AgriPos
              loading="lazy"
              src="/content/fmcg.gif"
              alt="industry gif"
            /> */}
          </div>
        </div>
        <Txt className="mobText">
          <Text
            Text="Fast moving consumer goods"
            font
            align="right"
            size="38px"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            lh="55px"
            mlh="30px"
            xmsize="2rem"
            xssize="3vw"
            msize="2.4rem"
            mmwidth="100%"
          />
        </Txt>
      </Bg>
    </div>
  );
};

export default CustomBg;
