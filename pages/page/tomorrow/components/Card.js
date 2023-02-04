import { animated } from "react-spring"
import styled from "styled-components"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
`
const Image = styled.img`
  border-radius: 20px;
  border: 3px solid white;
`

function Card({ imagen }) {
  return (
    <animated.div>
      <CardContainer>
        <Image src={imagen} alt="" />
      </CardContainer>
    </animated.div>
  )
}

export default Card
