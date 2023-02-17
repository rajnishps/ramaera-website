import React from "react"
import styled from "styled-components"
import Text from "../../../../../../components/Text/Text"

const StyledSocialMedia = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    bottom: 15vh;
  }
`
const RotateSvg = styled.div`
  @media only screen and (max-width: 768px) {
    transform: rotate(90deg);
  }
`
const txt = ["1", "2", "3"]

const MobileTab = (props) => {
  return (
    <StyledSocialMedia>
      {props.currentIndex == 0 ? (
        <RotateSvg>
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
        </RotateSvg>
      ) : (
        <RotateSvg>
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
        </RotateSvg>
      )}

      {props.currentIndex == 1 ? (
        <RotateSvg>
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
        </RotateSvg>
      ) : (
        <RotateSvg>
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
        </RotateSvg>
      )}

      {props.currentIndex == 2 ? (
        <RotateSvg>
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
        </RotateSvg>
      ) : (
        <RotateSvg>
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
        </RotateSvg>
      )}
    </StyledSocialMedia>
  )
}

export default MobileTab
