import React from "react"
import { Carousel } from "react-responsive-carousel"
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"
import Text from "../../../../../components/Text/Text"
import { SliderData } from "./SliderData"
import {
  Arrow,
  Img,
  InnoParaContainer,
  InnovatinRight,
  InnovationDiv,
  InnovationLeft,
} from "./style"

const Slider = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
      {SliderData.map((item) => (
        <InnovationDiv>
          <InnovationLeft>
            <Text
              Text={item.title}
              lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
              font
              size="50px"
              lh="110%"
              width="100%"
              mwidth="100%"
              fw="500"
              mlh="50px"
              align="center"
              xmsize="2rem"
              xssize="10vw"
              msize="2rem"
              mpadding="0"
              mmargin=" 0 0 0 0"
            />
            {/* <InnovationHead>{item.title}</InnovationHead> */}
            <Img autoPlay loop muted>
              <source src={item.bgImg} type="video/webm" />
            </Img>
          </InnovationLeft>
          <InnovatinRight>
            <InnoParaContainer>
              <Text
                Text={item.paragraph}
                fw="500"
                size="25px"
                lh="40px"
                width="27rem"
                m="0rem 0 0 1rem"
                xssize="18px"
                mlh="20px"
                msize="13px"
                mwidth="50vw"
                mta="center"
              />
            </InnoParaContainer>
            <Arrow src={"/background/arrow.png"} style={{ width: "60px" }} />
          </InnovatinRight>
        </InnovationDiv>
      ))}
    </Carousel>
  )
}

export default Slider
