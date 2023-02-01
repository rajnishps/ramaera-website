import React, { useState } from "react"
import styled from "styled-components"

const StylesTabsConatiner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 35vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`
const TabDot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  &:hover {
    background: linear-gradient(180deg, #ffe059 0%, #ffb253 100%);
  }
`
const SelectedTabDot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 10px;
  background: linear-gradient(180deg, #ffe059 0%, #ffb253 100%);
`
const ArrowContainer = styled.div`
  margin: 0 50px;
`

const Tabs = (review) => {
  const [currentReview, setCurrentReview] = useState(review)

  return (
    <StylesTabsConatiner>
      <ArrowContainer>
        <svg
          width="20"
          height="20"
          viewBox="0 0 29 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.6914 7.7629L5.64553 7.7629L10.2693 3.13917C10.907 2.50142 10.907 1.54478 10.2693 0.907028C9.6315 0.269273 8.67487 0.269273 8.03711 0.907028L0.702925 8.24121C0.0651699 8.87897 0.0651698 9.8356 0.702925 10.4734L8.03711 17.8075C8.67486 18.4453 9.6315 18.4453 10.2693 17.8075C10.907 17.1698 10.907 16.2132 10.2693 15.5754L5.64553 10.9517L26.6914 10.9517C27.4886 10.9517 28.2858 10.3139 28.2858 9.35729C28.2858 8.40065 27.4886 7.7629 26.6914 7.7629Z"
            fill="url(#paint0_linear_516_3111)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_516_3111"
              x1="14.2552"
              y1="0.428712"
              x2="14.2552"
              y2="18.2859"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFE159" />
              <stop offset="1" stop-color="#FFA751" />
            </linearGradient>
          </defs>
        </svg>
      </ArrowContainer>
      <SelectedTabDot />
      <TabDot />
      <TabDot />
      <TabDot />
      <ArrowContainer onClick={() => setCurrentReview(currentReview - 1)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 29 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.73629 11.2371L22.7822 11.2371L18.1585 15.8608C17.5207 16.4986 17.5207 17.4552 18.1585 18.093C18.7962 18.7307 19.7529 18.7307 20.3906 18.093L27.7248 10.7588C28.3626 10.121 28.3626 9.1644 27.7248 8.52664L20.3906 1.19246C19.7529 0.554706 18.7962 0.554706 18.1585 1.19246C17.5207 1.83022 17.5207 2.78685 18.1585 3.4246L22.7822 8.04833L1.73629 8.04833C0.939092 8.04833 0.141898 8.68608 0.141898 9.64271C0.141898 10.5993 0.939091 11.2371 1.73629 11.2371Z"
            fill="url(#paint0_linear_516_3109)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_516_3109"
              x1="14.1725"
              y1="18.5713"
              x2="14.1725"
              y2="0.714144"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFE159" />
              <stop offset="1" stop-color="#FFA751" />
            </linearGradient>
          </defs>
        </svg>
      </ArrowContainer>
    </StylesTabsConatiner>
  )
}

export default Tabs
