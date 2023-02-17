import React from "react";
import styled from "styled-components";
const TeamBox = ({ imgUrl, hoverImg, bgPos, mobileImg }) => {
  const ImageBox = styled.div`
    width: 25%;
    height: 79.9vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${imgUrl});
    background-position: center;

    background-size: cover;
    transition: all 0.4s;

    &:hover {
      background: url(${hoverImg});
      background-position: center;
      background-size: cover;
      transform: scale(1.1);
      border-radius: 30px;
      box-shadow: rgba(251, 250, 250, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 4px -12px 30px,
        rgba(252, 252, 252, 0.12) 4px 4px 6px,
        rgba(250, 250, 250, 0) 4px 12px 13px,
        rgba(251, 250, 250, 0.09) 4px -3px 5px;
    }
    @media (max-width: 600px) {
      width: 90%;
      background-position: ${bgPos ? bgPos : "center"};
      &:hover {
        /* height: 50vh; */
        background: url(${mobileImg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  `;

  return (
    <>
      <ImageBox />
    </>
  );
};

export default TeamBox;
