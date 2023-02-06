import styled from "styled-components"

const Image = styled.div`
  transform: scale(75%);
`
const Image1 = () => {
  return (
    <Image>
      <img loading="lazy" src="/content/promt1.png" />
    </Image>
  )
}

export default Image1
