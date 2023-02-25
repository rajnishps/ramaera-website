import React from "react"
import Text from "../../../../components/Text/Text"
import { Responsive } from "./components/Style"
import Holder from "./components/Holder"
import styled from "styled-components"

const index = () => (
  <Responsive>
    <div
      data-aos="fade-in"
      data-aos-duration="500"
      data-aos-anchor-placement="top-center"
    >
      <Text
        m="4rem 0 4rem 0"
        Text="Striving today for enabling a better tomorrow"
        width="80vw"
        lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
        font
        size="55px"
        fw="400"
        align="center"
        lh="65px"
        xmsize="4rem"
        xssize="6vw"
        msize="2.4rem"
      />
      <Holder />
    </div>
  </Responsive>
)
export default index
