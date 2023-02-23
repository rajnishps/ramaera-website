import styled from "styled-components"
export const ValueContainer = styled.div`
  width: 100%;
  margin: 20% auto;
`
export const ValParaContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  @media (max-width: 600px) {
    width: 80%;
  }
`

export const InnovationDiv = styled.div`
  width: 85%;
  margin: 50px auto;
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
  height: 80vh;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
`

export const Img = styled.video`
  width: 100%;
  margin: 20px;
  object-fit: contain;
  @media (max-width: 600px) {
  }
`
export const InnovationLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 5%;
  @media (max-width: 600px) {
    width: 100%;
  }
`
export const InnoParaContainer = styled.div`
  width: 50%;
  border-left: 2px solid white;
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 20px;
  }
`
export const InnovatinRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Arrow = styled.img`
  width: 70px;
  position: absolute;
  top: -30px;
  right: 40px;
  z-index: -10;
  @media (max-width: 600px) {
    width: 40px;
    top: 160%;
    left: -20%;
    display: none;
  }
`

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
