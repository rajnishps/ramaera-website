import styled from "styled-components"

export const CardContainer = styled.div`
  /* height: 50vh;
   */
`

export const CardImg = styled.div`
  color: #efefef;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 20vw;
  height: 38vh;
  min-width: 250px;
  min-height: 230px;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
`

export const CardDetails = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.8) 0%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  padding: 0 0px 10px 15px;
`

export const Name = styled.div`
  color: #a58e7c;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;
  margin: 3px 0;
  font-size: 25px;
`

export const Title = styled.div`
  font-weight: 300;
  font-size: 20px;
`

export const ZoomIn = styled.div`
  position: absolute;
  margin: 2rem;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    margin: 0;
  }
`

export const ZoomImage = styled.div`
  @media (max-width: 600px) {
    width: 100% !important;
    height: 400px;
  }
  img {
    width: 100%;
    height: 100%;
    vertical-align: top;
    border-radius: 15px;
    background-size: cover;
  }
`

export const ZoomDetails = styled.div`
  padding: 0 100px 0 50px;
  overflow-y: scroll;
  @media (max-width: 600px) {
    width: 100% !important;
    padding: 0;
  }
`

export const ZoomName = styled.h3`
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: personal !important;
  font-weight: 400;
  font-size: 2.2rem;
`
export const ZoomTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: 400;
  color: #a58e7c;
`
export const ZoomAbout = styled.p`
  color: white;
  margin: 20px 0;
`

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  @media (max-width: 600px) {
    position: sticky;
    height: auto;
  }
`

export const ModalContent = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  line-height: 1.4;
  padding: 14px 28px;
  width: 80%;
  height: 75%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    top: unset;
    left: unset;
    height: auto;
    width: 90%;
    margin: 20px;
    max-height: 95svh;
  }
`

export const CloseImg = styled.img`
  position: relative;
  top: 30px;
  left: 86%;
  width: 40px;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 600px) {
    top: 8px;
    left: 88%;
  }
`
const Style = () => {
  return <div>StyleImage</div>
}

export default Style
