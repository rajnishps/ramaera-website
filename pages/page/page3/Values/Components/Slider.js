import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Text from "../../../../../components/Text/Text";
import { SliderData } from "./SliderData";
import {
  Arrow,
  Img,
  InnoParaContainer,
  InnovatinRight,
  InnovationDiv,
  InnovationHead,
  InnovationLeft,
} from "./style";
// const SliderContainer = SliderData.map((item) => (
//   <InnovationDiv>
//     <InnovationLeft>
//       <InnovationHead>{item.title}</InnovationHead>
//       <Img src={item.bgImg}></Img>
//     </InnovationLeft>
//     <InnovatinRight>
//       <InnoParaContainer>
//         <Text
//           Text={item.paragraph}
//           fw="500"
//           size="25px"
//           lh="40px"
//           width="27rem"
//           m="0rem 0 0 1rem"
//           xssize="18px"
//           mlh="20px"
//           msize="13px"
//           mwidth="50vw"
//           mta="center"
//           // align="center"
//         />
//       </InnoParaContainer>
//       {/* <Arrow src={"/background/arrow.png"} /> */}
//     </InnovatinRight>
//   </InnovationDiv>
// ));
const Slider = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
      {SliderData.map((item) => (
        <InnovationDiv>
          <InnovationLeft>
            <InnovationHead>{item.title}</InnovationHead>
            <Img src={item.bgImg}></Img>
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
                // align="center"
              />
            </InnoParaContainer>
            <Arrow src={"/background/arrow.png"} style={{width:"60px"}} />
          </InnovatinRight>
        </InnovationDiv>
      ))}
    </Carousel>
  );
};

export default Slider;
