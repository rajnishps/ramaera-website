import { useState } from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import Text from "../../../components/Text/Text"
import { bg, RotateImage, FutureContainer } from "./components/Style"
import Roadmap from "./components/Roadmap"

const index = () => {
  const [repeatAnimation, setRepeatAnimation] = useState(0)
  return (
    <PageLayout bgColor="#f5f5f5" bg={bg} Y height="90rem">
      <RotateImage
        animate={{ rotate: 315 }}
        transition={{ duration: 4, repeat: 1 }}
      />
      <FutureContainer>
        <PageWidth width="1400px" margin="0 0 2rem 0">
          <Text
            Text="The"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            size="75px"
            fw="400"
            align="center"
            lh="55px"
            m="0 0 2rem 0"
          />
          <Text
            Text="FUTURE"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            size="111px"
            fw="400"
            align="center"
            lh="75px"
          />
          <Text
            Text="Our Roadmap"
            color="#fff"
            size="36px"
            m="4rem 0 0 0"
            fw="600"
            align="center"
            lh="35px"
          />
          <Text
            Text="A vision for the success of millions and national integration requires a fundamentally worthy and promising roadmap ."
            color="#fff"
            size="16px"
            m="2rem 0 0 0"
            fw="400"
            align="center"
            lh="31px"
            width="31rem"
          />
          <Roadmap />
        </PageWidth>
      </FutureContainer>
    </PageLayout>
  )
}

export default index
