import styled from "styled-components"

export const InnitiveContainer = styled.div`
  width: 100%;
`

export const Best = styled.div`
  width: 90%;
  margin: 10px auto;
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
  margin-top: 70px;
  /* background:linear-gradient(181.16deg, #FF7917 -26.31%, #FFDD2D 128.88%);; */
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

//Left section css
export const Left1 = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px solid white;
  height: 100%;
  border-radius: 20px 20px 20px 20px;

  background: linear-gradient(181.16deg, #ff7917 -26.31%, #ffdd2d 128.88%);
  @media (max-width: 600px) {
    border-right: none;
  }
`

export const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
`
export const MenuData = styled.div`
  display: flex;
  width: 100%;
  margin: 20px auto;
`
export const ArrowImg = styled.img`
  width: 22px;
`
export const MenuPara = styled.p`
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  margin-left: 5px;
`

//Right section css
export const RightContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const ImgBg = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url("/background/Inn.jpeg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 105vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  @media (max-width: 600px) {
    width: 88vw;
    height: 50vh;
    margin: 0px auto;

    border-radius: 0px 0px 20px 20px;
  }
`

export const ReverseText = styled.img`
  width: 300px;
  position: absolute;
  bottom: 7%;
  @media (max-width: 600px) {
    width: 100px;
  }
`
export const Info = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
  @media (max-width: 600px) {
    width: 90%;
    align-items: center;
    justify-content: center;
    margin: 0px auto;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    width: 90%;
    margin: 0px auto;
    justify-content: center;
    align-items: center;
  }
`
export const InfoHead = styled.h2`
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export const InfoPara = styled.p`
  font-size: 0.7rem;
  color: white;
  margin-top: 7px;
  @media (max-width: 600px) {
    font-size: 0.5rem;
  }
`

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
