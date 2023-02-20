import styled from "styled-components"

export const Image = styled.div`
  height: 30rem;
  width: 35rem;
  @media only screen and (max-width: 1200px) {
    height: 25rem;
    transform: scale(90%);
  }
  @media only screen and (max-width: 1000px) {
    height: 30rem;
    width: 35rem;
    margin-top: -10%;
    margin-left: 5vw;
  }
`
export const Responsive = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`
const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
