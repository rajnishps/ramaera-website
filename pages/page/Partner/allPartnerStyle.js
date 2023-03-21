import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  background: white;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.5rem;
  max-width: "max-content";
  @media (max-width: 450px) {
    width: 100vw;
    padding: 1.5rem;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  @media (max-width: 450px) {
    justify-content: center;
  }
`

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
