import React from "react"
import Left from "./Components/Left"
import Right from "./Components/Right"
import { InnitiativeHead, Best, Left1 } from "./Components/style"
import Text from "../../../../components/Text/Text"
const Innitiatives = () => {
  return (
    <div>
      <div data-aos="fade-up">
        <Text
          Text="INITIATIVES TO PROMOTE SUSTAINABILITY"
          lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
          font
          size="2.8rem"
          lh="90px"
          width="90rem"
          mwidth="100vw"
          miwidth="100vw"
          m="10rem 0 0 0"
          fw="500"
          mlh="50px"
          align="center"
          xmsize="2rem"
          xssize="4vw"
          msize="2rem"
          mpadding="0"
          mmargin=" 2rem 0 2rem 0"
        />
      </div>
      <Best>
        <Left />
        <Right />
      </Best>
    </div>
  )
}

export default Innitiatives
