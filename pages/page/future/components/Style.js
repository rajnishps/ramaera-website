import styled from "styled-components"
import { motion } from "framer-motion"

export const bg = "/background/blank.png"
export const hover = "/content/card.png"
export const stock = "/content/im.png"
export const curve = "/content/rect.png"

export const StockImage = styled.div`
  width: 90%;
  height: 42rem;
`
export const RotateImage = styled(motion.div)`
  width: 80%;
  height: 42rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${hover});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 1.5rem;
  padding: 2rem;
  position: absolute;
  z-index: -1;
  @media (max-width: 13500px) {
    width: 95%;
  }
`
export const FutureContainer = styled.div`
  width: 100%;
  min-height: 50rem;
  background-image: url(${bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin: 12rem 0;
  padding: 5rem 0;
`
export const HoverImage = styled.div``

const Style = () => {
  return <div>StyleImage</div>
}

export default Style
