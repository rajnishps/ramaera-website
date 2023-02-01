import React from "react"
import styled from "styled-components"
import Flex from "../../../../components/Styling/Flex"
import Text from "../../../../components/Text/Text"
import { CustomText } from "./StyleImage"

const StyleTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  // background: red;
  width: 50rem;
  margin: -6rem 0 4rem 0;
`
const TextContainer = () => {
  return (
    <StyleTextContainer>
      <Flex jc="flex-end">
        <div>
          <CustomText>
            Packaging industry for business{" "}
            <span style={{ color: "#EACDA3" }}>growth</span>
          </CustomText>
        </div>
        <svg
          width="155"
          height="155"
          viewBox="0 0 155 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_di_101_171)">
            <circle
              cx="77.5"
              cy="77.5"
              r="47.5"
              fill="url(#paint0_linear_101_171)"
            />
          </g>
          <path
            d="M58.3956 57.2314C61.253 60.1266 63.1778 63.4857 64.7158 66.8212C65.1465 65.7665 65.3574 64.87 66.377 63.9823C70.5078 66.3114 71.6768 67.788 72.0371 71.0487H77.9082C78.0664 67.8847 78.5762 66.1005 81.1162 63.7705C82.5137 64.8612 82.874 66.1356 83.586 67.3485C84.333 63.9296 86.8643 60.2048 90.3272 58.3934C85.7129 57.3773 80.791 58.3556 76.8535 59.935C77.6709 60.4966 78.8487 60.922 79.2178 61.6488C77.5479 62.5093 75.7461 65.371 74.7178 67.744C73.4785 65.538 70.8946 63.0472 68.3897 61.7991C69.4004 60.7813 70.4112 60.4113 71.4219 59.7873C68.5215 58.1728 63.3272 57.3729 58.3956 57.2314ZM59.1735 72.6308L55.548 82.2987H65.1114L68.7324 72.6308H59.1735ZM71.0176 72.6308L74.6387 82.2987H95.4512L91.8301 72.6308H71.0176ZM69.084 76.1991L66.2012 83.8808H59.416V97.7675H69.084V76.1991ZM70.666 76.1991V97.7675H91.584V83.8808H73.5489L70.666 76.1991Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_di_101_171"
              x="0"
              y="0"
              width="155"
              height="155"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.917647 0 0 0 0 0.803922 0 0 0 0 0.639216 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_101_171"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_101_171"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_101_171"
              />
            </filter>
            <linearGradient
              id="paint0_linear_101_171"
              x1="30"
              y1="77.5"
              x2="125"
              y2="77.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EACDA3" />
              <stop offset="1" stop-color="#D6AE7B" />
            </linearGradient>
          </defs>
        </svg>
      </Flex>
      <Text
        Text="We provide packaging solutions to help your business flourish with boosted outreach. Ensuring the protection, containment, and communication of packaged projects is our foremost priority."
        align="right"
        fw="500"
        size="23px"
        lh="45px"
        width="40rem"
      />
    </StyleTextContainer>
  )
}

export default TextContainer
