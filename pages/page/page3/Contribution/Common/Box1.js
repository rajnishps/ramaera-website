import React from "react";
import styled from "styled-components";
import { Box, Head, Icon, Para, WhiteDiv, YellowDiv } from "../style";

const Box1 = ({ Heading, ParaGraph, percent,source  }) => {
  return (
    <Box>
      <div style={{position:"relative"}}>
      <YellowDiv />
      <WhiteDiv>
        <Icon src={source}/>
      </WhiteDiv>
      </div>
      <Head>
        <span>{percent}</span> 
        {Heading}
      </Head>
      <Para>{ParaGraph}</Para>
    </Box>
  );
};

export default Box1;
