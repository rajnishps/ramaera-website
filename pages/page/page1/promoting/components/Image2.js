import styled from "styled-components"

const Image = styled.div`
  transform: scale(75%);
  @media only screen and (max-width: 768px) {
    transform: scale(50%);
  }
`
const Image2 = () => {
  return (
    <Image>
      <img loading="lazy" src="/content/promt2.png" />
    </Image>
  )
}

export default Image2
