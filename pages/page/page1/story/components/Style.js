import styled from "styled-components"
import { motion } from "framer-motion"

export const bg = "/background/blank.png"
export const stock = "/content/im.png"
export const hover = "/content/im2.png"

export const StockImage = styled.div`
  width: 100%;
  padding: 0 12.5vw;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`
export const HoverImage = styled(motion.div)`
  width: 87.5%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${hover});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 1.5rem;
  padding: 2rem;
  margin-top: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (max-width: 1350px) {
    width: 100%;
    height: 32rem;
  }
  @media (max-width: 768px) {
    opacity: 0;
  }
`

const Style = () => {
  return <div>StyleImage</div>
}

export default Style
