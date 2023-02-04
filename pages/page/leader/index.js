import React from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import Text from "../../../components/Text/Text"
import { bg, Responsive } from "./components/Style"
import Imagecontainer from "./components/ImageContainer"
import Textcontainer from "./components/Textcontainer"

const index = () => {
  return (
    <PageLayout bgColor="#f5f5f5">
      <PageWidth width="1500px" margin="0 0 2rem 0">
        <div
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
        >
          <Text
            Text="Leadership the future"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            size="55px"
            fw="400"
            align="center"
            lh="45px"
          />
        </div>
        <Responsive>
          <Imagecontainer />
          <Textcontainer />
        </Responsive>
      </PageWidth>
    </PageLayout>
  )
}

export default index
