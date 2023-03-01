import React from "react"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import Text from "../../../../components/Text/Text"
import PageWidth from "../../../../components/Width/PageWidth"
export const refine = "/background/refine.png"

const index = () => (
  <PageLayout mheight="30vh" bgColor="#f5f5f5" bg={refine}>
    <PageWidth width="1500px" margin="8rem 0 0 0">
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Text
          Text="REALISING THE VISION OF SUCCESS"
          lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
          font
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
    </PageWidth>
  </PageLayout>
)

export default index
