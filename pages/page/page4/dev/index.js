import styled from "styled-components"
import Position from "../common/position"

const PositionWrapper = styled.div``
const Heading = styled.h2``
const index = () => {
  return (
    <PositionWrapper>
      <Heading>Development</Heading>
      <Position
        role={"BACKEND DEVELOPER (NODE.JS) "}
        place={"Noida, IN"}
        work={"Full Time"}
        description={
          "We are looking for an analytical, results-driven back-end developer who will work with team members to troubleshoot and improve current back-end applications and processes."
        }
      />
      <Position
        role={"FRONTEND DEVELOPER (REACT.JS)"}
        place={"Remote"}
        work={"Full Time"}
        description={
          "We are looking for a skilled react.js developer to join our front-end development team. In this role, you will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux and Webpack."
        }
      />
      <Position
        role={"DEVOPS ENGINEER"}
        place={"Noida, IN"}
        work={"Full Time"}
        description={
          "Looking for a DevOps Engineers who can support developers with their code while also understanding engineering best practices like operating system design or database management systems software installation processes."
        }
      />
    </PositionWrapper>
  )
}

export default index
