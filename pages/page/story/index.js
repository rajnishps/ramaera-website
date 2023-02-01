import React, { useState } from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import Text from "../../../components/Text/Text"
import { bg, stock, StockImage, HoverImage } from "./components/Style"

const index = () => {
  const [isActive, setisActive] = useState(false)

  return (
    <PageLayout bgColor="#f5f5f5" bg={bg}>
      <PageWidth width="1500px" margin="0 0 2rem 0">
        <Text
          Text="Stories that Inspire"
          lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
          font
          size="75px"
          fw="400"
          align="center"
          lh="55px"
        />
        <Text
          Text="Ramaera Industries have implemented numerous philanthropic initiatives that have aimed at community building and upliftings. We have showcased some influential and impacting initiatives that have been performed by us."
          color="#FFF"
          size="24px"
          lh="50px"
          fw="400"
          m="2rem 0"
          align="center"
          width="1100px"
        />
        <StockImage
          onMouseMove={() => setisActive(true)}
          onMouseLeave={() => setisActive(false)}
          //style={{display: `${isActive ? 'none' : 'block'}`}}
        >
          <img src={stock} alt="" style={{ width: "100%", height: "100%" }} />
        </StockImage>
        <HoverImage
          // initial={{ x: 0, y:-200}}
          // animate={isActive ? {x: 0,y:0} : { x: 0, y:-2000000 } }
          // transition={{ duration: 1.5}}
          style={{ display: `${isActive ? "flex" : "none"}` }}
          //onMouseLeave={()=> setisActive(false)}
        >
          <Text
            Text="Ramaera abides by the principles of sustainability nation orientation and excellence prioritising to create a majestic difference in the field of industrialisation and has become one of the most trustworthy enterprises of India."
            color="#FFF"
            size="26px"
            lh="54px"
          />
        </HoverImage>
        <Text
          Text="Ramaera abides by the principles of sustainability nation orientation and excellence prioritising to create a majestic difference in the field of industrialisation and has become one of the most trustworthy enterprises of India."
          color="#FFF"
          size="26px"
          lh="50px"
          fw="400"
          m="2rem 0 0 0"
          align="center"
          width="1200px"
        />
      </PageWidth>
    </PageLayout>
  )
}

export default index
