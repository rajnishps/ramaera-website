import React from "react"
import Text from "../../../components/Text/Text"
import { Responsive } from "./components/Style"
import Holder from "./components/Holder"

const index = () => (
  <Responsive>
    <div
      data-aos="fade-in"
      data-aos-duration="500"
      data-aos-anchor-placement="top-center"
    >
      <Text
        Text="Striving today for enabling a better tomorrow"
        width="80vw"
        lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
        font
        size="55px"
        fw="400"
        align="center"
        lh="65px"
      />
      <Holder />
    </div>
  </Responsive>
)
export default index
