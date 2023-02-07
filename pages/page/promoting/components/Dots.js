import styled from "styled-components"

const Image = styled.img`
  left: 125px;
  @media only screen and (max-width: 768px) {
    top: -200px;
    transform: scale(60%);
  }
`
const Dots = () => {
  return <Image src="/content/promtDots.png" alt="" />
}

export default Dots
