import PageLayout from "../../../../components/PageLayout/PageLayout";
import PageWidth from "../../../../components/Width/PageWidth";
import Text from "../../../../components/Text/Text";
import { bg, Responsive } from "./components/Style";
import CustomBg from "./components/CustomBg";
import Circle from "./components/Circle";
import Dots from "./components/Dots";
import Image1 from "./components/Image1";
import Image2 from "./components/Image2";
import PromtContainer1 from "./components/PromtContainer1";
import PromtContainer2 from "./components/PromtContainer2";
import styled from "styled-components";

const ResImage1 = styled.div`
  position: absolute;
  left: 0;
  top: 5vh;
  margin: 120px 0 0 200px;
  @media only screen and (max-width: 768px) {
    margin: 0;
    top: 2vh;
    right: 50%;
  }
`;
const ResImage2 = styled.div`
  position: absolute;
  right: 10vw;
  top: 630px;
  @media only screen and (max-width: 768px) {
    top: 72vh;
    right: 0;
  }
`;
const index = () => {
  return (
    <PageLayout bgColor="#f5f5f5">
      <PageWidth width="1500px" margin="0 0 0 0 ">
        <div
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Text
            Text="Promoting Entrepreneurship"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            size="55px"
            fw="400"
            align="center"
            lh="55px"
            xmsize="4rem"
            xssize="6vw"
            msize="1.6rem"
          />
        </div>

        <Responsive>
          <CustomBg />

          <div data-aos="fade-down" data-aos-easing="linear">
            <CustomBg />
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="200"
            data-aos-anchor-placement="top-center"
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              margin: "0 0 0 0  ",
            }}
          >
            <Circle />
          </div>
          <div
            data-aos="fade-bottom"
            data-aos-duration="200"
            data-aos-easing="ease-in-back"
            style={{
              position: "absolute",
              left: "150px",
              top: "500px",
              margin: "0 0 0 0  ",
            }}
          >
            <Dots />
          </div>
          <ResImage1
            data-aos="slide-right"
            data-aos-duration="500"
            data-aos-easing="linear"
            data-aos-anchor-placement="top-bottom"
          >
            <Image1 />
          </ResImage1>
          <ResImage2
            data-aos="slide-left"
            data-aos-duration="500"
            data-aos-easing="linear"
            data-aos-anchor-placement="top-bottom"
          >
            <Image2 />
          </ResImage2>

          <div 
            className="container1"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-anchor-placement="bottom-bottom"
            style={{
              position: "absolute",
              right: "12vw",
              top: "320px",
              margin: " 0 10vh 0 0 ",
            }}
          >
            <PromtContainer1 />
          </div>
          <div
            className="container2"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-anchor-placement="top-bottom"
            style={{
              position: "absolute",
              left: "29vw",
              top: "700px",
              margin: " 0 0 0 0 ",
            }}
          >
            <PromtContainer2 />
          </div>
        </Responsive>
      </PageWidth>
    </PageLayout>
  );
};

export default index;
