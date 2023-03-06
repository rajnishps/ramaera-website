import React from "react"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import Text from "../../../../components/Text/Text"
import { factory, Responsive } from "./components/Style"
import PageWidth from "../../../../components/Width/PageWidth"
import Image from "next/image"

const index = () => (
  <PageLayout mheight="30vh" bgColor="#f5f5f5">
    <div style={{ zIndex: "-2" }}>
      <Image
        src={factory}
        alt="factory"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <PageWidth width="1500px" margin="8rem 0 0 0">
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <Text
            Text="transforming your dreams to reality"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            mmwidth="100vw"
            mmsize="2.2rem"
            size="105px"
            fw="400"
            align="center"
            lh="105px"
            xmsize="6rem"
            xssize="10vw"
            msize="2.4rem"
            mmargin="0 0 10vh 0"
          />
        </div>
        <Responsive></Responsive>
      </PageWidth>
    </div>
  </PageLayout>
)

export default index
