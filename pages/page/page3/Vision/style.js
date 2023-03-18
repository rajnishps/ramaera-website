import styled from "styled-components"

export const VisionBox = styled.div`
  background: url("/background/Rectangle.svg");
  width: 100%;
  height: 202.6vh;
  min-height: 1500px;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    min-height: 1600px;
  }
  @media (max-width: 600px) {
    height: 220vh;
    min-height: 1800px;
    width: 95%;
    margin: 0px auto;
  }
  @media (max-width: 400px) {
  min-height: 2100px;
}
`

export const VisionBG = styled.div`
  width: 95%;
  margin: 50px auto;
  background: url("/background/3dTriangle.png");
  height: 100vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
`
export const VisionHead = styled.h1`
  font-family: "personal";

  font-style: normal;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 65px;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: center;
  padding-top: 70px;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
