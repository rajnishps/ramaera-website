import React from "react";
import styled from "styled-components";

import { CardContainer, CardImg, CardDetails, Name, Title } from "./style.js";

const Card = ({ image }) => {
  return (
    <>
      <CardContainer>
        <CardImg key={image.id}>
          <img src={image.imageName} alt="" />

          <CardDetails>
            <Name>{image.name}</Name>
            <Title>{image.title}</Title>
          </CardDetails>
        </CardImg>
      </CardContainer>
    </>
  );
};

export default Card;
