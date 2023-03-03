import React from "react"
import styled from "styled-components"
import Text from "../../../../components/Text/Text"
import Articles from "./Articles"
import News from "./News/News"
import { NewsData } from "./News/NewsData"
import {
  TrendingContainer,
  TrendingHead,
  TrendingLeft,
  TrendingRight,
  TrendingContainer1,
  TrendingLeft1,
} from "./style"
import { YouTubeEmbed } from "react-social-media-embed"

const Trending = () => {
  return (
    <>
      <TrendingContainer1>
        <TrendingLeft1>
          <YouTubeEmbed
            width="100%"
            url="https://www.youtube.com/watch?v=s7Spqmyp_fc"
          />
        </TrendingLeft1>
        <TrendingRight>
          <div data-aos="fade-left">
            <Articles />
          </div>
        </TrendingRight>
      </TrendingContainer1>
      {/* <TrendingContainer>
        <TrendingLeft className="scrollbar">
          <div data-aos="fade-right">
            <Text
              Text="Trending"
              lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
              font
              size="2.5rem"
              lh="90px"
              width="17vw"
              mwidth="80vw"
              fw="500"
              mlh="50px"
              m="0 0 0 2rem"
              xmsize="6rem"
              xssize="10vw"
              msize="2rem"
              mpadding="0"
              padding="0"
              mmargin="0 0 0 0"
              bbottom="4px solid white"
            />
          </div>
          <div data-aos="fade-up">
            {NewsData.map((item) => {
              return <News item={item} />
            })}
          </div>
        </TrendingLeft>
        <TrendingRight>
          <div data-aos="fade-left">
            <Articles />
          </div>
        </TrendingRight>
      </TrendingContainer> */}
    </>
  )
}

export default Trending
