import React from "react";
import styled from "styled-components";
import Text from "../../../../components/Text/Text";

import {
  Container,
  Heading,
  MapIcon,
  ImagePoint,
  MapBox,
  HoverText,
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
            size="clamp(4rem, 2.5vw, 4rem)"
            fw="400"
            align="left"
            lh="70px"
            xmsize="clamp(2.5rem, 5vw, 4rem)"
            xssize="clamp(2.5rem, 5vw, 4rem)"
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
            size="clamp(4rem, 2.5vw, 4rem)"
            fw="400"
            align="left"
            lh="70px"
            xmsize="clamp(2.5rem, 5vw, 4rem)"
            xssize="clamp(2.5rem, 5vw, 4rem)"
            msize="2.5rem"
            mwidth="100%"
            padding="0"
            mpadding="0"
            mta="left"
            mlh="unset"
          />
          <Text
            Text="Lorem Ipsum is simply dummy text of the printing ."
            mta="left"
            padding="2vh 0"
            mpadding="2vh 0"
            fw="300"
            mwidth="unset"
            lh="2"
          />
        </Heading>

        <MapIcon>
          <MapBox>
            <ImagePoint>
              <HoverText>
                <h3>Ramaera Industries</h3>
              </HoverText>
            </ImagePoint>
          </MapBox>
        </MapIcon>
      </Container>
    </>
  );
};

export default index;
