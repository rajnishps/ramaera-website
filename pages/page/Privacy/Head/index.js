import React, { useEffect, useState } from "react";
import Text from "../../../../components/Text/Text";
import Button from "../../../../components/Button/Button";

import { Gallery, ContainerTop, Heading, SubHeading, Image } from "./style";

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
            <SubHeading>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit
              praesentium reiciendis aut debitis minima earum fugiat quam
              aspernatur qui. Labore, aliquam iste. A quasi ut accusantium
              laboriosam eius sequi.
            </SubHeading>
            <a href="#policy">
              <Button
                Text="Explore"
                secondary
                lightborder
                height="60px"
                m="2rem 0 0 0"
                padding="10px 30px"
                width="150px"
              />
            </a>
          </Heading>
        </ContainerTop>
      </Gallery>
    </>
  );
};

export default index;
