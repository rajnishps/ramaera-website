import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
`
//ugy7uyfyth
export const BoxContainer = styled.div`
  width: 80%;
  margin: 10% auto;
  background: url("/background/blurBg.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  @media (max-width: 600px) {
    width: 95%;
    margin: 0px auto;
    flex-direction: column;
  }
`

export const Box = styled.div`
  width: 390px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  margin-bottom: 30px;
  position: relative;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  border: 0.5px solid white;
  transition: all 0.2s ease;
  &:hover {
    border: 2px solid white;
  }

  @media (max-width: 600px) {
    width: 80%;
    height: 60%;
    margin: 20px auto;
    padding-top: 20px;
    border: 2px solid white;
  }
`

export const YellowDiv = styled.div`
  width: 55px;
  height: 55px;
  background: linear-gradient(90deg, #ece9e6 0%, #ffffff 100%);
  border-radius: 15px;

  ${Box}:hover & {
    background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  }
  @media (max-width: 600px) {
    background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  }
`
export const WhiteDiv = styled.div`
  width: 55px;
  height: 55px;
  background-image: url("/background/white.png");
  border-radius: 15px;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Head = styled.p`
  font-family: "personal";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 35px;
  width: 80%;
  /* margin-top: 20px; */
  text-align: center;
  background: linear-gradient(90deg, #9a9a9a 0%, #9a9a9a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transition: all 1s ease-in-out;
  ${Box}:hover & {
    background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  @media (max-width: 600px) {
    background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-size: 1rem;
  }
`

export const Para = styled.p`
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 30px;
  text-align: center;
  background: linear-gradient(90deg, #9a9a9a 0%, #9a9a9a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  width: 75%;
  margin-bottom: 30px;
  transition: all 0.5s ease-in-out;
  ${Box}:hover & {
    background: linear-gradient(90deg, #fdfdfd 0%, #fefdfd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 25px;
    background: linear-gradient(90deg, #fdfdfd 0%, #fefdfd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`
export const Icon = styled.img`
  width: 35px;
`

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
