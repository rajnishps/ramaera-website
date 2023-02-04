import styled from "styled-components"
import Card from "./Card"
import Carousel from "./Carousel"

const Wrapper = styled.div`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

function Holder() {
  let cards = [
    {
      key: "https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg",
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      ),
    },
    {
      key: "https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png",
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      ),
    },
    {
      key: "https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png",
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
  ]
  console.log(cards)
  return (
    <div>
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  )
}

export default Holder
