import React from "react";
import styled from "styled-components";
import { Box, Head, Icon, Para, WhiteDiv, YellowDiv } from "../style";

const Box1 = ({ Heading, ParaGraph, percent,source  }) => {
  return (
    <Box>
      <YellowDiv />
      <WhiteDiv>
        <Icon src={source}/>
      </WhiteDiv>
      <Head>
        {" "}
        <span>{percent}</span>
        {Heading}
      </Head>
      <Para>{ParaGraph}</Para>
    </Box>
  );
};

export default Box1;
