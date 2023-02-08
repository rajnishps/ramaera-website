import styled from "styled-components"

const Image = styled.img`
  position: absolute;
  height: 25vw;
  top: 280px;
  left: 100px;
  @media only screen and (max-width: 768px) {
    left: 20px;
  }
`
const Circle = () => {
  return <Image src="/content/promtCircle.png" alt="" />
}

export default Circle
