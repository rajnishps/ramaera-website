import styled from "styled-components"

export const Container = styled.div`
  background: linear-gradient(90deg, #000000 0%, #353434 100%);

  border: 3px solid #ffffff;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 1.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    pading-left: 200vw;
    gap: 10vw;
    overflow-y: scroll;
    opacity: 95%;
  }
`
const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
