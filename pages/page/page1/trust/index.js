import { useState } from "react"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import Text from "../../../../components/Text/Text"
import { bg, Responsive } from "./components/Style"
import styled from "styled-components"
import BgRectangle from "./components/BgRectangle"
import Review from "./components/Review"
const slides = [
  {
    eachSlide: (
      <Review
        avatar={"/content/avatar1.png"}
        profileName={"Edward Newgate"}
        profileTitle={"Founder Circle"}
        profileReview={
          "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls or administrative hassle) and securely"
        }
      />
    ),
  },
  {
    eachSlide: (
      <Review
        avatar={"/content/avatar2.png"}
        profileName={"Bill Gates"}
        profileTitle={"User Square"}
        profileReview={
          "Lorem ipsum dolor sit amet consectetur explicabo perferendis ipsum voluptates quibusdam."
        }
      />
    ),
  },
  {
    eachSlide: (
      <Review
        avatar={"/content/avatar3.png"}
        profileName={"Tim Apple"}
        profileTitle={"Google Expert"}
        profileReview={
          "Not the CEO of any big company at all, just a random guy."
        }
      />
    ),
  },
]
export const ArrowLeft = styled.button`
  position: absolute;
  background: none;
  border: 0;
  left: 40vw;
  bottom: 20vh;
  cursor: pointer;
  transition: ease 0.3s all;
  outline: none;
  &:hover {
    transform: scale(1.15);
  }
  @media only screen and (max-width: 768px) {
    left: 30vw;
  }
`
export const ArrowRight = styled.button`
  position: absolute;
  background: none;
  right: 40vw;
  bottom: 20vh;
  border: 0;
  cursor: pointer;
  transition: ease 0.3s all;
  outline: none;
  &:hover {
    transform: scale(1.15);
  }
  @media only screen and (max-width: 768px) {
    right: 30vw;
  }
`
const Slide = styled.div`
  transform: scale(1.2);
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
const Wrapper = styled.div`
  height: 60vh;
  transition: 0.5s all linear;
  will-change: transform;
`
const Section = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`
const Dots = styled.img`
  position: absolute;
  top: 200px;
  left: -120px;
  transform: scale(0.25);
`
const ArrowsHover = styled.div``
const DotsContainer = styled.ul`
  height: auto;
  margin: 0;
  padding: 0;
  position: absolute;
  width: auto;
  text-align: center;
  left: 50%;
  bottom: 20vh;
  transform: translateX(-50%);
  z-index: 10;
  list-style-type: none;
  & li {
    display: inline-block;
    padding: 5px 10px;
    font-size: 20px;
    & button {
      cursor: pointer;
      color: #fff;
      background-color: transparent;
      border: none;
    }
    &.active button {
      color: #ffa751;
      &.hover {
        text-decoration: none;
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
  @media only screen and (max-width: 768px) {
  }
`
const index = () => {
  const [active, setActive] = useState(0)

  const max = slides.length

  const nextOne = () => active < max - 1 && setActive(active + 1)

  const prevOne = () => active > 0 && setActive(active - 1)

  const isActive = (value) => active === value && "active"

  const setSliderStyles = () => {
    const transition = active * -100

    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    }
  }

  const renderSlides = () =>
    slides.map((item, index) => <Slide key={index}>{item.eachSlide}</Slide>)

  const renderDots = () =>
    slides.map((silde, index) => (
      <li className={isActive(index) + " dots"} key={index}>
        <button onClick={() => setActive(index)}>
          <span>&#9673;</span>
        </button>
      </li>
    ))

  const renderArrows = () => (
    <ArrowsHover>
      <ArrowLeft onClick={() => prevOne()}>
        <svg
          width="32"
          height="19"
          viewBox="0 0 32 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_516_3111)">
            <path
              d="M27.6914 7.7629L6.64553 7.7629L11.2693 3.13917C11.907 2.50142 11.907 1.54478 11.2693 0.907028C10.6315 0.269273 9.67487 0.269273 9.03711 0.907028L1.70293 8.24121C1.06517 8.87897 1.06517 9.8356 1.70292 10.4734L9.03711 17.8075C9.67486 18.4453 10.6315 18.4453 11.2693 17.8075C11.907 17.1698 11.907 16.2132 11.2693 15.5754L6.64553 10.9517L27.6914 10.9517C28.4886 10.9517 29.2858 10.3139 29.2858 9.35729C29.2858 8.40065 28.4886 7.7629 27.6914 7.7629Z"
              fill="url(#paint0_linear_516_3111)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_516_3111"
              x="-2.77539"
              y="0.428711"
              width="36.0605"
              height="25.8574"
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
                result="effect1_dropShadow_516_3111"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_516_3111"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_516_3111"
              x1="15.2552"
              y1="0.428712"
              x2="15.2552"
              y2="18.2859"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE159" />
              <stop offset="1" stopColor="#FFA751" />
            </linearGradient>
          </defs>
        </svg>
      </ArrowLeft>
      <ArrowRight onClick={() => nextOne()}>
        <svg
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_516_3109)">
            <path
              d="M3.73629 11.2371L24.7822 11.2371L20.1585 15.8608C19.5207 16.4986 19.5207 17.4552 20.1585 18.093C20.7962 18.7307 21.7529 18.7307 22.3906 18.093L29.7248 10.7588C30.3626 10.121 30.3626 9.1644 29.7248 8.52664L22.3906 1.19246C21.7529 0.554705 20.7962 0.554705 20.1585 1.19246C19.5207 1.83022 19.5207 2.78685 20.1585 3.4246L24.7822 8.04833L3.73629 8.04833C2.93909 8.04833 2.1419 8.68608 2.1419 9.64271C2.1419 10.5993 2.93909 11.2371 3.73629 11.2371Z"
              fill="url(#paint0_linear_516_3109)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_516_3109"
              x="-1.85742"
              y="0.713867"
              width="36.0605"
              height="25.8574"
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
                result="effect1_dropShadow_516_3109"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_516_3109"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_516_3109"
              x1="16.1725"
              y1="18.5713"
              x2="16.1725"
              y2="0.714144"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE159" />
              <stop offset="1" stopColor="#FFA751" />
            </linearGradient>
          </defs>
        </svg>
      </ArrowRight>
    </ArrowsHover>
  )

  return (
    <PageLayout bgColor="#f5f5f5">
      <PageWidth width="1500px" margin="2rem 0 0 0">
        <div
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          <Text
            Text="Earning the trust of millions"
            width="80vw"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            size="55px"
            fw="400"
            align="center"
            lh="65px"
            xmsize="4rem"
            xssize="6vw"
            msize="2.4rem"
          />
        </div>
        <Responsive>
          <div
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
          >
            <BgRectangle />
            <Section>
              <Dots src="/content/Dots.png" alt="dots" />
              <Wrapper style={setSliderStyles()}>{renderSlides()}</Wrapper>
              {renderArrows()}
              <DotsContainer>{renderDots()}</DotsContainer>
            </Section>
          </div>
        </Responsive>
      </PageWidth>
    </PageLayout>
  )
}

export default index
