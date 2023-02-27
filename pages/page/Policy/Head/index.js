import React, { useEffect, useState } from "react";
import Text from "../../../../components/Text/Text";

import { Head, ContainerTop, Image, Heading } from "./style";

const index = () => {
  return (
    <>
      <Head>
        <ContainerTop>
          <Image></Image>
          <Heading>
            <Text
              Text="Privacy Policy"
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
          </Heading>
        </ContainerTop>
      </Head>
    </>
  );
};

export default index;
