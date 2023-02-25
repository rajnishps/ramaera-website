import { animated } from "react-spring"
import styled from "styled-components"

const CardContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  @media only screen and (max-width: 1000px) {
    transform: scale(0.6);
  }
`

const Image = styled.img`
  border-radius: 20px;
  border: 3px solid white;
`
const TextContainer = styled.div`
  position: absolute;
  text-align: center;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
`
const Heading = styled.div`
  padding: 0 3rem;
  padding-bottom: 20px;
  font-size: 2rem;
  font-weight: 700;
`
const SubHeading = styled.div`
  padding: 0 5rem;

  font-size: 1rem;
`
const Date = styled.div`
  position: absolute;
  top: -100px;
  padding: 10px 25px;
  font-size: 0.6rem;
`

function Card({ imagen, onDate, title, subTitle }) {
  return (
    <animated.div>
      <CardContainer>
        <Image src={imagen} alt={title} />
        <TextContainer>
          <Date>{onDate}</Date>
          <Heading>{title}</Heading>
          <SubHeading>{subTitle}</SubHeading>
        </TextContainer>
      </CardContainer>
    </animated.div>
  )
}

export default Card
