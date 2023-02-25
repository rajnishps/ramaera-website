import styled from "styled-components"

export const bg = "/background/blank.png"

const img1 = "/content/tom1.png"
const img2 = "/content/tom2.png"
const img3 = "/content/tom3.png"

export const images = [img1, img2, img3]

export const Responsive = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20vh;
`

const Style = () => {
  return <div>StyleImage</div>
}

export default Style
