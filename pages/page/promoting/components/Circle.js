import styled from "styled-components"

const Image = styled.img`
  position: absolute;
  height: 25vw;
  top: 280px;
  left: 100px;
`
const Circle = () => {
  return <Image src="/content/promtCircle.png" alt="" />
}

export default Circle
