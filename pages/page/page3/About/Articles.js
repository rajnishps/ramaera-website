import React from 'react'
import styled from 'styled-components'
import Analytics from './Analytics'
const ArticlesContainer = styled.div`
    width: 80%;
`
const ArticlesHead = styled.h2`
background: linear-gradient(90deg, #FFE259 0%, #FFA751 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
font-size: 20px;
line-height: 34px;
font-family: 'Zilap Orion Personal Use';
margin-top: 30px;
margin-left: 30px;
@media (max-width: 600px){
  font-size: 2rem;
}
    
`
const Articles = () => {
  return (
    <ArticlesContainer>
        <ArticlesHead>Latest Articles</ArticlesHead>
        <Analytics/>
        <Analytics/>
        <Analytics/>
        
    </ArticlesContainer>
  )
}

export default Articles