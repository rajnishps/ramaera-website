import styled from "styled-components"

export const Image = styled.div`
  height: 32rem;
  width: 33rem;
  video {
    position: absolute;
    height: 90%;
    width: 90%;
  }
  @media only screen and (max-width: 768px) {
    width: 95vw;
    video {
      width: 100%;
      height: 100%;
      margin-top: -160px;
    }
  }
`
export const Responsive = styled.div`
  display: flex;
  align-items: center;
  //justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
