import styled from "styled-components"
import { motion } from "framer-motion"

export const bg = "/background/blank.png"
export const stock = "/content/im.png"
export const curve = "/content/rect.png"

export const StockImage = styled.div`
  width: 90%;
  height: 42rem;
`
export const RotateImage = styled(motion.div)`
  width: 100vw;
  transform: scale(140%);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
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
