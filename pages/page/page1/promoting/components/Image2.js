import styled from "styled-components"

const Image = styled.div`
  transform: scale(0.75);
    @media only screen and (max-width: 1200px) {
    width: 30vw;
    padding: 0 0vw 0 0;
  }
  @media only screen and (max-width: 768px) {
    transform: scale(0.5);
    width: 100vw;
    padding: 0 10vw 0 0;
  }
  @media only screen and (max-width: 450px) {
    display: none;
  }
`
const Image2 = () => {
  return (
    <Image>
      <img loading="lazy" alt="prompt again" src="/content/promt2.png" />
    </Image>
  )
}

export default Image2
