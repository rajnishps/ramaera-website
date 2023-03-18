import styled from "styled-components"
export const TrendingContainer1 = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
export const TrendingLeft1 = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: fit-content;
  border: 1px solid white;
  border-radius: 20px;
  overflow: scroll;
  /* background: linear-gradient(
      180.93deg,
      #222222 -91.95%,
      rgba(65, 65, 65, 0) 99.2%
    ),
    url("/background/Left Column (1).png"); */
  background-position: right;
  background-repeat: no-repeat;
  
  @media (max-width: 600px) {
    width: 100%;
    background: none;
  }
`
export const TrendingRight = styled.div`
  width: 30%;
  overflow-y: scroll;
  border: 1px solid white;
  height: 45vh;
  border-radius: 20px;
  @media (max-width: 1200px) {
    height: 60vh;
    width: 37%;
  } 
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 20px;
    height: 60vh;
    max-height: 100%;
  }
`
export const TrendingHead1 = styled.h2`
  font-family: "personal";

  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 26px;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin: 30px;
  padding-bottom: 15px;
  border-bottom: 4px solid white;
  width: 235px;
  @media (max-width: 600px) {
    font-size: 30px;
    width: 190px;
    margin: 20px auto;
  }
`
export const TrendingContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
export const TrendingLeft = styled.div`
  width: 60%;
  height: 90vh;
  border: 1px solid white;
  border-radius: 20px;
  overflow: scroll;
  background: linear-gradient(
      180.93deg,
      #222222 -91.95%,
      rgba(65, 65, 65, 0) 99.2%
    ),
    url("/background/Left Column (1).png");
  background-position: right;
  background-repeat: no-repeat;
  @media (max-width: 600px) {
    width: 100%;
    background: none;
  }
`

export const TrendingHead = styled.h2`
  font-family: "personal";
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 26px;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin: 30px;
  padding-bottom: 15px;
  border-bottom: 4px solid white;
  width: 235px;
  @media (max-width: 600px) {
    font-size: 30px;
    width: 190px;
    margin: 20px auto;
  }
`

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
