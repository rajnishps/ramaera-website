import styled from "styled-components"

export const Image = styled.div`
  height: 35rem;
  width: 35rem;
  @media only screen and (max-width: 768px) {
    width: 95vw;
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
