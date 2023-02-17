import React from "react";
import styled from "styled-components";

import { CardContainer ,CardImg} from "./cardStyle.js";

const Card = ({ image }) => {
  return (
    <>
    <CardContainer>
        <CardImg key={image.id}>
            <img
                 className="image"
                src={image.imageName}
                 alt=""
                />
          <h1>{image.id}</h1>
        </CardImg>
    </CardContainer>
    </>
  );
};

export default Card;