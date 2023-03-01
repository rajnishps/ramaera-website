import React from "react"
import styled from "styled-components"
import {
  TwitterTimelineEmbed,
  EmbedToggler,
  TwitterEmbed,
} from "react-twitter-embed"
import Text from "../../../../components/Text/Text"
import Analytics from "./Analytics"
const ArticlesContainer = styled.div`
  height: 90vh;
  width: 100%;
  border-radius: 19px;
  overflow-y: scroll;
  @media (max-width: 600px) {
    height: 80vh;
  }
`
/* const ArticlesHead = styled.h2`
background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
font-size: 20px;
line-height: 34px;
font-family: "Zilap Orion Personal Use";
margin-top: 30px;
margin-left: 30px;
@media (max-width: 600px) {
  font-size: 2rem;
}
` */
const Articles = () => {
  return (
    <ArticlesContainer>
      {/* <Text
        Text="Latest Articles"
        lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
        font
        size="25px"
        lh="2px"
        width="20rem"
        mwidth="100%"
        fw="500"
        mlh="30px"
        xmsize="2rem"
        xssize="4vw"
        msize="1.3rem"
        mpadding="0"
        mmargin=" 2rem 0 2rem 1rem"
        m="1rem 0 0 0"
      />

      <Analytics />
      <Analytics />
      <Analytics /> */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="/ramaeraltd"
        autoHeight="true"
        theme="dark"
        placeholder="loading..."
        noScrollbar="true"
        tweetLimit="5"
      />
    </ArticlesContainer>
  )
}

export default Articles
