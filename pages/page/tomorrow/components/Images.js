import { useEffect, useState } from "react"
import styled from "styled-components"

const slides = [
  {
    eachSlide: "url(/content/tom3.png)",
  },
  {
    eachSlide: "url(/content/tom2.png)",
  },
  {
    eachSlide: "url(/content/tom1.png)",
  },
]
export const Arrows = styled.button`
  position: absolute;
  top: 40%;
  background: none;
  height: 60px;
  border: 0;
  cursor: pointer;
  transition: ease 0.3s all;
  outline: none;
`
export const Slide = styled.div`
  transform: scale(80%);
  width: 100vw;
  height: 100vh;
  float: left;
  line-height: 50vh;
  font-size: 40vh;
  text-align: center;
  background-size: cover;
  background-position: center center;
  background-color: transparent;
`
export const ArrowsHover = styled.div`
  &:hover ${Arrows} {
    transform: scale(105%);
  }
`
export const Wrapper = styled.div`
  height: 60vh;
  transition: 0.5s all linear;
  will-change: transform;
`
export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`
const Images = () => {
  const [active, setActive] = useState(1)
  const max = slides.length
  const autoplay = 1
  const intervalBetweenSlides = () =>
    autoplay && setActive(active === max - 1 ? 0 : active + 1)

  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 3500)
    return () => clearInterval(interval)
  })
  const nextOne = () => {
    if (active + 1 === max) {
      setActive(0)
    }
    active < max - 1 && setActive(active + 1)
  }

  const prevOne = () => {
    if (active === 0) {
      setActive(max - 1)
    }
    active > 0 && setActive(active - 1)
  }

  const setSliderStyles = () => {
    const transition = active * -100

    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    }
  }
  const renderSlides = () =>
    slides.map((item, index) => (
      <Slide key={index} style={{ backgroundImage: item.eachSlide }}></Slide>
    ))

  const renderArrows = () => (
    <>
      <ArrowsHover>
        <Arrows style={{ left: 0 }} onClick={() => prevOne()}>
          <svg
            width="66"
            height="66"
            viewBox="0 0 66 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_460_6005)">
              <circle
                cx="33"
                cy="29"
                r="28.5"
                fill="white"
                fill-opacity="0.06"
                stroke="white"
              />
              <path
                d="M27.3101 41.674C26.9342 41.2789 26.9 40.6607 27.2076 40.225L27.3101 40.1002L36.4433 30.5L27.3101 20.8998C26.9342 20.5047 26.9 19.8865 27.2076 19.4508L27.3101 19.326C27.686 18.9309 28.2743 18.8949 28.6888 19.2182L28.8075 19.326L38.6899 29.7131C39.0658 30.1082 39.1 30.7264 38.7924 31.1621L38.6899 31.2869L28.8075 41.674C28.394 42.1087 27.7236 42.1087 27.3101 41.674Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_460_6005"
                x="0"
                y="0"
                width="66"
                height="66"
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
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_460_6005"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_460_6005"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Arrows>
      </ArrowsHover>
      <ArrowsHover>
        <Arrows style={{ right: 0 }} onClick={() => nextOne()}>
          <svg
            width="66"
            height="66"
            viewBox="0 0 66 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_460_6010)">
              <circle
                cx="33"
                cy="29"
                r="28.5"
                fill="white"
                fill-opacity="0.06"
                stroke="white"
              />
              <path
                d="M38.6899 41.674C39.0658 41.2789 39.1 40.6607 38.7924 40.225L38.6899 40.1002L29.5567 30.5L38.6899 20.8998C39.0658 20.5047 39.1 19.8865 38.7924 19.4508L38.6899 19.326C38.314 18.9309 37.7257 18.8949 37.3112 19.2182L37.1925 19.326L27.3101 29.7131C26.9342 30.1082 26.9 30.7264 27.2076 31.1621L27.3101 31.2869L37.1925 41.674C37.606 42.1087 38.2764 42.1087 38.6899 41.674Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_460_6010"
                x="0"
                y="0"
                width="66"
                height="66"
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
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_460_6010"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_460_6010"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Arrows>
      </ArrowsHover>
    </>
  )

  return (
    <Section>
      <Wrapper style={setSliderStyles()}>{renderSlides()}</Wrapper>
      {renderArrows()}
    </Section>
  )
}

export default Images
