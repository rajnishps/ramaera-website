import React from "react"

import { ValueContainer, ValParaContainer } from "./Components/style"

import Text from "../../../../components/Text/Text"
import Slider from "./Components/Slider"

const Values = () => {
  return (
    <ValueContainer>
      <div data-aos="fade-right" data-aos-anchor-placement="top-bottom">
        <Text
          Text="THE VALUES OF RAMAERA"
          lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
          font
          size="50px"
          lh="110%"
          width="100%"
          mwidth="100vw"
          fw="500"
          mlh="50px"
          align="center"
          xmsize="2rem"
          xssize="4vw"
          msize="2rem"
          mpadding="0"
          mmargin=" 0 0 0rem 0"
        />
      </div>
      <ValParaContainer>
        <div data-aos="fade-left" data-aos-anchor-placement="top-bottom">
          <Text
            Text="The Love and the trust of our Ramaera Family has been the foundation
        of our growth and has helped us to strengthen our core values as an
        industry for the people"
            fw="500"
            size="25px"
            lh="40px"
            width="100%"
            m="0rem 0 0 0"
            xssize="18px"
            mlh="30px"
            msize="18px"
            mwidth="80vw"
            mta="center"
            align="center"
            padding="0 15vw"
            mmwidth="85vw"
          />
        </div>
      </ValParaContainer>
      <Slider />
    </ValueContainer>
  )
}

export default Values
