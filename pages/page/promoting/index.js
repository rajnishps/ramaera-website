import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import Text from "../../../components/Text/Text"
import { bg, Responsive } from "./components/Style"
import CustomBg from "./components/CustomBg"
import Circle from "./components/Circle"
import Dots from "./components/Dots"
import Image1 from "./components/Image1"
import Image2 from "./components/Image2"
import PromtContainer1 from "./components/PromtContainer1"
import PromtContainer2 from "./components/PromtContainer2"

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
            lh="45px"
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
              left: "7vw",
              top: "57vh",
              margin: "0 0 0 0  ",
            }}
          >
            <Dots />
          </div>
          <div
            data-aos="slide-right"
            data-aos-duration="500"
            data-aos-easing="linear"
            data-aos-anchor-placement="top-bottom"
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              margin: "20vh 0 0 10vw  ",
            }}
          >
            <Image1 />
          </div>
          <div
            data-aos="slide-left"
            data-aos-duration="500"
            data-aos-easing="linear"
            data-aos-anchor-placement="top-bottom"
            style={{
              position: "absolute",
              right: "0",
              top: "72vh",
              margin: " 0 10vh 0 0 ",
            }}
          >
            <Image2 />
          </div>

          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-anchor-placement="bottom-bottom"
            style={{
              position: "absolute",
              right: "15vw",
              top: "40vh",
              margin: " 0 10vh 0 0 ",
            }}
          >
            <PromtContainer1 />
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-anchor-placement="top-bottom"
            style={{
              position: "absolute",
              left: "25vw",
              top: "90vh",
              margin: " 0 0 0 0 ",
            }}
          >
            <PromtContainer2 />
          </div>
        </Responsive>
      </PageWidth>
    </PageLayout>
  )
}

export default index
