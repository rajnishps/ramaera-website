import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import Text from "../../../../components/Text/Text"
import {
  bg,
  RotateImage,
  TimelineWrapper,
  FutureContainer,
  TimelineContainer,
} from "./components/Style"
import Roadmap from "./components/Roadmap"
import Timeline from "./components/Timeline"

const index = () => {
  return (
    <PageLayout bgColor="#f5f5f5" Y height="90rem">
      <RotateImage>
        <div
          data-aos-easing="ease-in-sine"
          data-aos="rotate-c"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          <img loading="lazy" src="/content/card.png" alt="card" />
        </div>
      </RotateImage>
      <FutureContainer>
        <PageWidth scale={"85%"} width="1400px" margin="0 0 2rem 0">
          <Text
            Text="The"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            size="75px"
            fw="400"
            align="center"
            lh="55px"
            m="0 0 0 0"
            xmsize="4rem"
            xssize="6vw"
            msize="2.4rem"
          />
          <Text
            Text="FUTURE"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            size="111px"
            fw="400"
            align="center"
            lh="65px"
            xmsize="4rem"
            xssize="6vw"
            msize="3.6rem"
          />
          <Text
            Text="Our Roadmap"
            color="#fff"
            size="36px"
            m="2rem 0 0 0"
            fw="600"
            align="center"
            lh="35px"
            xmsize="4rem"
            xssize="6vw"
            msize="2.4rem"
          />
          <Text
            Text="A vision for the success of millions and national integration requires a fundamentally worthy and promising roadmap ."
            color="#fff"
            size="16px"
            m="1rem 0 0 0"
            fw="400"
            align="center"
            lh="31px"
            width="80vw"
          />
          <Roadmap />
          {/* <TimelineContainer>
            <TimelineWrapper>
              <Timeline />
            </TimelineWrapper>
          </TimelineContainer> */}
        </PageWidth>
      </FutureContainer>
    </PageLayout>
  )
}

export default index
