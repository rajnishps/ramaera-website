import React, { useEffect, useState } from "react";
import Text from "../../../../components/Text/Text";

import {
  Gallery,
  ContainerTop,
  Tags,
  Button,
  Heading,
  Display,
  Container,
  Image,
  DisplayHeading,
  DisplayCard,
  DisplayWrapper,
  ImageWrapper,
} from "./style";
import { images } from "./../Collection/data";
import Card from "./../Card/index";

const index = () => {
  return (
    <>
      <Gallery>
        <ContainerTop>
          <Image></Image>
          <Heading>
            <Text
              Text="Privacy and Policy"
              font
              lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
              size="2.5rem"
              fw="400"
              lh
              xmsize="3rem"
              xssize="3rem"
              msize="2.5rem"
              padding="0"
              mpadding="0"
            />
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit
              praesentium reiciendis aut debitis minima earum fugiat quam
              aspernatur qui. Labore, aliquam iste. A quasi ut accusantium
              laboriosam eius sequi.
            </p>
            <button>Explore</button>
          </Heading>
        </ContainerTop>
      </Gallery>
    </>
  );
};

export default index;
