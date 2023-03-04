import React from "react";
import styled from "styled-components";
import Text from "../../../../../../components/Text/Text";

const Tab = (props) => {
  const StyledSocialMedia = styled.div`
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%; /* position the top  edge of the element at the middle of the parent */
    right: 4.5rem; /* position the left edge of the element at the middle of the parent */
    transform: translate(0, -40%);
    @media only screen and (max-width: 768px) {
      transform: scale(0.7);
      width: 20px;
      top: -35vw;
      right: 40vw;
    }
  `;
  const txt = [" ", " ", " "];

  return (
    <StyledSocialMedia>
      {props.currentIndex == 0 ? (
        <svg
          width="5"
          height="86"
          viewBox="0 0 5 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.51172"
            y="85.8525"
            width="85.2591"
            height="3.2"
            transform="rotate(-90.4691 1.51172 85.8525)"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="5"
          height="86"
          viewBox="0 0 5 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.2"
            x="1.51172"
            y="85.8525"
            width="85.2591"
            height="3.2"
            transform="rotate(-90.4691 1.51172 85.8525)"
            fill="white"
          />
        </svg>
      )}

      {props.currentIndex == 1 ? (
        <svg
          width="5"
          style={{ margin: "2rem 0" }}
          height="86"
          viewBox="0 0 5 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.51172"
            y="85.8525"
            width="85.2591"
            height="3.2"
            transform="rotate(-90.4691 1.51172 85.8525)"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="5"
          style={{ margin: "2rem 0" }}
          height="86"
          viewBox="0 0 5 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.2"
            x="1.51172"
            y="85.8525"
            width="85.2591"
            height="3.2"
            transform="rotate(-90.4691 1.51172 85.8525)"
            fill="white"
          />
        </svg>
      )}

      {props.currentIndex == 2 ? (
        <svg
          width="5"
          height="86"
          viewBox="0 0 5 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.51172"
            y="85.8525"
            width="85.2591"
            height="3.2"
            transform="rotate(-90.4691 1.51172 85.8525)"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="5"
          height="86"
          viewBox="0 0 5 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.2"
            x="1.51172"
            y="85.8525"
            width="85.2591"
            height="3.2"
            transform="rotate(-90.4691 1.51172 85.8525)"
            fill="white"
          />
        </svg>
      )}

      <Text
        Text={txt[props.currentIndex]}
        size="41.6px"
        lh="51px"
        ls="1.6px"
        m="2rem 0 0 0"
      />
    </StyledSocialMedia>
  );
};

export default Tab;
