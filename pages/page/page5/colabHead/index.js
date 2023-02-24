import React from "react";
import styled from "styled-components";
import Text from "../../../../components/Text/Text";

import {
  Container,
  Heading,
  MapIcon,
  ImagePoint,
  MapBox,
  ImgPoint1,
  ImgPoint2,
  ImgPoint3,
  ImgPointMain,
} from "./style";

const index = () => {
  return (
    <>
      <Container>
        <Heading>
          <Text
            Text="Lets"
            lg="linear-gradient(to right, #ffa73d, gold)"
            font
            size="3.8rem"
            fw="400"
            align="left"
            lh="70px"
            xmsize="4rem"
            xssize="3.5rem"
            msize="2.5rem"
            mwidth="100%"
            padding="0"
            mpadding="0"
            mta="left"
            mlh="unset"
          />
          <Text
            Text=" 
            Collaborate "
            lg="linear-gradient(to right, #ffa73d, gold)"
            font
            size="3.8rem"
            fw="400"
            align="left"
            lh="70px"
            xmsize="4rem"
            xssize="3.5rem"
            msize="2.5rem"
            mwidth="100%"
            padding="0"
            mpadding="0"
            mta="left"
            mlh="unset"
          />
          {/* <Text
            Text="Lorem Ipsum is simply dummy text of the printing ."
            mta="left"
            padding="2vh 0"
            mpadding="2vh 0"
            fw="300"
            mwidth="unset"
            lh="2"
          /> */}
        </Heading>

        <MapIcon>
          <MapBox>
            <ImagePoint>
              <ImgPoint1
                style={{
                  position: "relative",
                  left: "80px",
                  top: "150px",
                  height: "50px",
                  width: "50px",
                  backgroundRepeat: "no-repeat",
                }}
                src="/content/pointGrey.png"
              />
              <ImgPoint2
                style={{
                  position: "relative",
                  left: "106px",
                  top: "285px",
                  height: "50px",
                  width: "50px",
                }}
                src="/content/pointGrey.png"
              />
              <ImgPoint3
                style={{
                  position: "relative",
                  left: "330px",
                  top: "100px",
                  height: "50px",
                  width: "50px",
                }}
                src="/content/pointGrey.png"
              />
              <ImgPointMain href="#" id="ramaera">
                <img src="/content/point.png" />
              </ImgPointMain>
              <h3>Ramaera Industries</h3>
            </ImagePoint>
          </MapBox>
        </MapIcon>
      </Container>
    </>
  );
};

export default index;
