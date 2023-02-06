import React from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import Text from "../../../components/Text/Text"
import { factory, Responsive } from "./components/Style"
import PageWidth from "../../../components/Width/PageWidth"

const index = () => (
  <PageLayout bgColor="#f5f5f5" bg={factory}>
    <PageWidth width="1500px" margin="8rem 0 0 0">
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Text
          Text="transforming your dreams to reality"
          lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
          font
          size="105px"
          fw="400"
          align="center"
          lh="105px"
          xmsize="6rem"
          xssize="10vw"
          msize="4rem"
        />
      </div>
      <Responsive></Responsive>
    </PageWidth>
  </PageLayout>
)

export default index
