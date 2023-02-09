import styled from "styled-components"
import Card from "./Card"
import Carousel from "./Carousel"
import { images } from "./Style"

const Image = styled.img`
  padding: 13.5rem 2rem;
  position: absolute;
  transform: scale(60%);
  @media only screen and (max-width: 1000px) {
    opacity: 0;
  }
`

function Holder() {
  let cards = [
    {
      key: 0,
      content: (
        <Card
          imagen={images[0]}
          onDate={"19 JUNE, 2019 | Blog"}
          title={"Ramaera Narmada - an ode to the Grandeur of Gujarat"}
          subTitle={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas minima accusantium odio autem tempore veritatis fugit distinctio veniam. Saepe, ducimus!"
          }
        />
      ),
    },
    {
      key: 1,
      content: (
        <Card
          imagen={images[1]}
          onDate={"19 JUNE, 2019 | Blog"}
          title={"Ramaera Narmada - an ode to the Grandeur of Gujarat"}
          subTitle={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas minima accusantium odio autem tempore veritatis fugit distinctio veniam. Saepe, ducimus!"
          }
        />
      ),
    },
    {
      key: 2,
      content: (
        <Card
          imagen={images[2]}
          onDate={"19 JUNE, 2019 | Blog"}
          title={"Ramaera Narmada - an ode to the Grandeur of Gujarat"}
          subTitle={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas minima accusantium odio autem tempore veritatis fugit distinctio veniam. Saepe, ducimus!"
          }
        />
      ),
    },
  ]
  return (
    <div>
      <Image style={{ left: 0 }} src={"/content/left.png"} />
      <Image style={{ right: 0 }} src={"/content/right.png"} />
      <Carousel
        showArrows={true}
        cards={cards}
        height="500px"
        width="100%"
        offset={1}
      />
    </div>
  )
}

export default Holder
