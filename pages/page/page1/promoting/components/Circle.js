import styled from "styled-components"

const Image = styled.img`
  position: absolute;
  height: 25vw;
  top: 280px;
  left: 100px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const Circle = () => {
  return <Image src="/content/promtCircle.png" alt="circle background" />
}

export default Circle
