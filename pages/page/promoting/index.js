import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
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
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <PageLayout bgColor="#f5f5f5" bg={bg}>
      <PageWidth width="1500px" margin="0 0 0 0 ">
        <Text
          Text="Promoting Entrepreneurship"
          lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
          font
          size="55px"
          fw="400"
          align="center"
          lh="45px"
        />

        <CustomBg />
        <Responsive>
          <Circle />
          <Dots />
          <Image1 />
          <Image2 />
          <PromtContainer1 />
          <PromtContainer2 />
        </Responsive>
      </PageWidth>
    </PageLayout>
  )
}

export default index
