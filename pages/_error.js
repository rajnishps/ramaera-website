import Link from "next/link"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  font-family: "Montserrat", "sans-serif";
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Linked = styled(Link)`
  transition: 200ms;
  &:hover {
    transform: scale(1.05);
  }
`
export default function FourOhFour() {
  return (
    <Container>
      <h2 style={{ fontSize: "1.6rem", margin: "2rem", color: "white" }}>
        404 | This page could not be found.
      </h2>

      <Linked
        style={{ fontSize: "1.6rem", margin: "2rem", color: "white" }}
        href="/"
      >
        Go back Home
      </Linked>
    </Container>
  )
}
