import React from "react"
import styled from "styled-components"
import Flex from "../../../../../components/Styling/Flex"
import Text from "../../../../../components/Text/Text"
import Link from "next/link"
import TransparentButton from "../../../../../components/TransparentButton/TransparentButton"

const StyleTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 50rem;
  margin: 1rem 0 -7.5rem 100px;
  @media only screen and (max-width: 768px) {
    position: absolute;
    margin: 0;
    width: 100vw;
    top: 0vh;
    overflow: hidden;
  }
  /* @media only screen and (max-width: 400px) {
    padding: 550px 0;
  } */
`
const ButtonWrapper = styled.div`
  padding: 2vh 23vw 0 0;
  @media only screen and (max-width: 768px) {
    padding: 2vh 30vw 2vh 30vw;
  }
  @media only screen and (max-width: 400px) {
    padding: 2vh 25vw 2vh 25vw;
  }
`
const IconDiv = styled.div`
  @media only screen and (min-width: 768px) {
    position: absolute;
    left: -120px;
  }
`

const TextContainer = () => {
  return (
    <StyleTextContainer>
      <Flex mcolumn>
        <IconDiv>
          <svg
            width="123"
            height="123"
            viewBox="0 0 155 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_di_101_195)">
              <ellipse
                cx="77.5"
                cy="77.2423"
                rx="47.5"
                ry="46.255"
                fill="url(#paint0_linear_101_195)"
              />
            </g>
            <path
              d="M66.0435 101.101C64.8478 101.101 63.8246 100.672 62.9739 99.8147C62.1217 98.9558 61.6957 97.9238 61.6957 96.7187C61.6957 95.5137 62.1217 94.4817 62.9739 93.6228C63.8246 92.7654 64.8478 92.3367 66.0435 92.3367C67.2391 92.3367 68.2623 92.7654 69.113 93.6228C69.9652 94.4817 70.3913 95.5137 70.3913 96.7187C70.3913 97.9238 69.9652 98.9558 69.113 99.8147C68.2623 100.672 67.2391 101.101 66.0435 101.101ZM87.7826 101.101C86.587 101.101 85.5638 100.672 84.713 99.8147C83.8609 98.9558 83.4348 97.9238 83.4348 96.7187C83.4348 95.5137 83.8609 94.4817 84.713 93.6228C85.5638 92.7654 86.587 92.3367 87.7826 92.3367C88.9783 92.3367 90.0022 92.7654 90.8543 93.6228C91.7051 94.4817 92.1304 95.5137 92.1304 96.7187C92.1304 97.9238 91.7051 98.9558 90.8543 99.8147C90.0022 100.672 88.9783 101.101 87.7826 101.101ZM58.7065 90.1457L65.1739 78.3141L57.3478 61.6623H53V57.2803H60.1196L69.3587 76.9995H84.6304L93.0543 61.6623H98L87.1848 81.3816H68.4348L66.0435 85.7636H92.1304V90.1457H58.7065ZM76.913 74.8085L73.8696 71.741L77.2935 68.2354H68.2174V63.8534H77.2935L73.8152 60.3477L76.913 57.2803L85.6087 66.0444L76.913 74.8085Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_di_101_195"
                x="0"
                y="0.987305"
                width="155"
                height="152.51"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                  values="0 0 0 0 0.207843 0 0 0 0 0.552941 0 0 0 0 0.509804 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_101_195"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_101_195"
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
                  result="effect2_innerShadow_101_195"
                />
              </filter>
              <linearGradient
                id="paint0_linear_101_195"
                x1="30"
                y1="77.2423"
                x2="125"
                y2="77.2423"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F2EFD3" />
                <stop offset="1" stopColor="#358D82" />
              </linearGradient>
            </defs>
          </svg>
        </IconDiv>
        <div>
          <Text
            Text="Offering the best with"
            lg="linear-gradient(90deg, #F2EFD3 0%, #358D82 100%)"
            align="left"
            size="42px"
            lh="55px"
            width="50vw"
            mlh="30px"
            xmsize="2rem"
            xssize="3vw"
            msize="2rem"
            mta="center"
            padding="0"
          />
          <Text
            Text="FMCG industry"
            lg="linear-gradient(90deg, #F2EFD3 0%, #358D82 100%)"
            align="left"
            size="42px"
            lh="55px"
            width="50vw"
            mlh="30px"
            xmsize="2rem"
            xssize="3vw"
            msize="2rem"
            mta="center"
            padding="0"
          />
        </div>
      </Flex>
      <Text
        Text="Ramaera FMCG industry has commenced an extensive range of FMCG to make your days more than ordinary. We plan to offer you nothing less than the best."
        fw="500"
        size="20px"
        lh="45px"
        width="32.5rem"
        m=" 0"
        xssize="18px"
        mlh="30px"
        msize="18px"
        mwidth="100vw"
        mta="center"
        padding="0 0 0 0vw"
      />
      <ButtonWrapper>
        <Link href="/Industries#goods">
          <TransparentButton
            Text="Read more"
            border="solid #F2EFD3 1.6px"
            bg="linear-gradient(90deg, #F2EFD3 0%, #358D82 100%)"
            height="48px"
            m="2rem 0 0 0"
            br="1.1rem"
            fw="300"
            fontSize="14px"
          />
        </Link>
      </ButtonWrapper>
    </StyleTextContainer>
  )
}

export default TextContainer
