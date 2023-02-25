import PageLayout from "../../../../components/PageLayout/PageLayout"
import Text from "../../../../components/Text/Text"
import PageWidth from "../../../../components/Width/PageWidth"
import Image from "next/image"
const empower = "/background/empower.jpg"

const index = () => (
  <PageLayout mheight="fit-content" bgColor="#f5f5f5">
    <div style={{ zIndex: "-2" }}>
      <Image
        src={empower}
        alt="empowering"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <PageWidth width="1500px" margin="8rem 0 0 0">
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <Text
            Text="EXPLORE BE EMPOWERED BUILD"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            size="105px"
            fw="400"
            align="center"
            lh="105px"
            xmsize="2rem"
            xssize="10vw"
            msize="2.4rem"
            mmargin="0 0 10vh 0"
          />
        </div>
      </PageWidth>
    </div>
  </PageLayout>
)

export default index
