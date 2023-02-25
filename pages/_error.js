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

export default function FourOhFour() {
  return (
    <Container>
      <h2 style={{ fontSize: "2.6rem", margin: "2rem" }}>
        An error as occured.
      </h2>
      <h1>
        <span style={{ fontSize: "3.2rem", margin: "2rem" }}>
          (╯°□°）╯︵ ┻━┻
        </span>
      </h1>
      <Link style={{ fontSize: "1.6rem", margin: "2rem" }} href="/">
        Go back
      </Link>
    </Container>
  )
}
