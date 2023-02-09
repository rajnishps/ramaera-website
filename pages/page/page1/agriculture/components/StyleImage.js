import styled from "styled-components"

export const Image = styled.div`
  height: 25rem;
  width: 35rem;
  @media only screen and (max-width: 1200px) {
    transform: scale(90%);
  }
  @media only screen and (max-width: 1000px) {
    transform: scale(80%);
  }
`
export const Responsive = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
