import React from "react"
import styled from "styled-components"
import Heading from "../../../../components/Heading/Heading"
import Flex from "../../../../components/Styling/Flex"
import Text from "../../../../components/Text/Text"

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
          <Heading
            Text="Agri-business to bestow"
            align="right"
            size="42px"
            lh=""
            color="#FFF"
          />
          <Text
            Text="Nature's Love"
            align="right"
            size="42px"
            lg="linear-gradient(90deg, #F7941E 0%, #72C6EF 50%, #00A651 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)"
            lh="55px"
          />
        </div>
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_di_101_207)">
            <circle cx="75" cy="75" r="45" fill="#579181" />
          </g>
          <path
            d="M50 52.9995C59.1242 59.7653 70.7678 74.0078 72.4955 97.9995C74.5133 82.659 75.8698 76.6245 81.4937 66.4995"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M91.3355 63.1988C93.7276 66.8546 94.9983 71.1304 94.991 75.4995C94.991 87.9263 84.9198 97.9995 72.4955 97.9995C60.0712 97.9995 50 87.9263 50 75.4995C50 63.0728 60.0712 52.9995 72.4955 52.9995C77.0014 52.9995 81.199 54.3248 84.7173 56.6063"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M83.9776 57.4995C81.7235 60.366 81.3996 63.318 81.5031 66.4995C85.7772 66.2745 88.2585 66.0473 91.1761 63.3495C94.339 60.4245 94.7754 58.1745 95.0004 52.9995C88.9266 53.2245 86.8502 53.8433 83.9776 57.4995Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <filter
              id="filter0_di_101_207"
              x="0"
              y="0"
              width="150"
              height="150"
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
                values="0 0 0 0 0.341176 0 0 0 0 0.568627 0 0 0 0 0.505882 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_101_207"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_101_207"
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
                result="effect2_innerShadow_101_207"
              />
            </filter>
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
