import React from "react"
import styled from "styled-components"
import Flex from "../../../../../components/Styling/Flex"
import Text from "../../../../../components/Text/Text"
import Link from "next/link"
import TransparentButton from "../../../../../components/TransparentButton/TransparentButton"

const StyleTextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 50rem;
  margin: 1rem 100px -7.5rem 0;
  @media only screen and (max-width: 768px) {
    position: absolute;
    margin: 0;
    margin-top: 50px;
    width: 100vw;
    top: 0vh;
    overflow: hidden;
  }
`
const ButtonWrapper = styled.div`
  padding: 2vh 0 0 0;
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
    right: -130px;
  }
`

const TextContainer = () => {
  return (
    <StyleTextContainer>
      <Flex jc="end" mcolumn>
        <IconDiv>
          <svg
            width="120"
            height="120"
            viewBox="0 0 155 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_di_61_91)">
              <circle
                cx="77.5"
                cy="77.5"
                r="47.5"
                fill="url(#paint0_linear_61_91)"
              />
            </g>
            <path
              d="M96.2875 78.45L87.625 74.4625V63.0375C87.621 62.7978 87.5482 62.5643 87.4152 62.3648C87.2823 62.1653 87.0947 62.0083 86.875 61.9125L77.5 57.6C77.3355 57.5238 77.1563 57.4844 76.975 57.4844C76.7937 57.4844 76.6145 57.5238 76.45 57.6L67.075 61.9125C66.858 62.0129 66.6744 62.1734 66.5459 62.375C66.4174 62.5766 66.3494 62.8109 66.35 63.05V74.475L57.725 78.45C57.508 78.5504 57.3244 78.7109 57.1959 78.9125C57.0674 79.1141 56.9994 79.3484 57 79.5875V91.8125C56.9994 92.0516 57.0674 92.2858 57.1959 92.4874C57.3244 92.689 57.508 92.8496 57.725 92.95L67.1 97.2625C67.2646 97.3386 67.4437 97.3781 67.625 97.3781C67.8063 97.3781 67.9855 97.3386 68.15 97.2625L77 93.1875L85.85 97.2625C86.0145 97.3386 86.1937 97.3781 86.375 97.3781C86.5563 97.3781 86.7355 97.3386 86.9 97.2625L96.275 92.95C96.492 92.8496 96.6756 92.689 96.8041 92.4874C96.9326 92.2858 97.0006 92.0516 97 91.8125V79.5875C97.0017 79.3497 96.9356 79.1165 96.8094 78.915C96.6832 78.7135 96.5021 78.5522 96.2875 78.45ZM92.775 79.5875L86.3875 82.5L80 79.5875L86.3875 76.65L92.775 79.5875ZM77 60.1L83.3875 63.0375L77 65.975L70.625 63.0375L77 60.1ZM67.625 76.6375L74.0125 79.575L67.625 82.5L61.2375 79.5875L67.625 76.6375ZM75.75 91L67.625 94.75L59.5 91V81.5375L67.1 85C67.2612 85.0724 67.4358 85.1099 67.6125 85.1099C67.7892 85.1099 67.9639 85.0724 68.125 85L75.725 81.5L75.75 91ZM68.875 74.4625V65L76.475 68.5C76.6395 68.5761 76.8187 68.6156 77 68.6156C77.1813 68.6156 77.3605 68.5761 77.525 68.5L85.125 65V74.475L77 78.225L68.875 74.4625ZM94.5125 91.0125L86.3875 94.7625L78.25 91.0125V81.525L85.8625 85C86.0219 85.0706 86.1944 85.1071 86.3688 85.1071C86.5431 85.1071 86.7156 85.0706 86.875 85L94.475 81.5L94.5125 91.0125Z"
              fill="#F8F8F8"
            />
            <defs>
              <filter
                id="filter0_di_61_91"
                x="0"
                y="0"
                width="155"
                height="155"
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
                  values="0 0 0 0 0.490196 0 0 0 0 0.219608 0 0 0 0 0.87451 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_61_91"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_61_91"
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
                  result="effect2_innerShadow_61_91"
                />
              </filter>
              <linearGradient
                id="paint0_linear_61_91"
                x1="30"
                y1="77.5"
                x2="125"
                y2="77.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BF5AE0" />
                <stop offset="1" stopColor="#A811DA" />
              </linearGradient>
            </defs>
          </svg>
        </IconDiv>
        <div>
          <Text
            Text="Unleashing the strength of"
            align="right"
            size="42px"
            lh="55px"
            mlh="30px"
            xmsize="2rem"
            xssize="3vw"
            msize="2rem"
            mta="center"
            width="100%"
            margin="0"
            padding="0"
          />
          <Text
            Text="Technology"
            lg="linear-gradient(90deg, #bf5ae0 0%, #A811DA 100%)"
            align="right"
            size="42px"
            lh="55px"
            width="100%"
            mlh="30px"
            xmsize="2rem"
            xssize="3vw"
            msize="2rem"
            margin="0"
            mta="center"
            padding="0"
          />
        </div>
      </Flex>
      <Text
        Text="We believe in innovation and excellence, hence our approach in the field of technology is focused to relish incredible customer experience and stabilising business models for tomorrow."
        fw="500"
        align="right"
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
        <Link href="/Industries#technology">
          <TransparentButton
            Text="Read more"
            border="solid #A811DA 1.6px"
            bg="linear-gradient(180deg, #BF5AE0 0%, #A811DA 100%);"
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
