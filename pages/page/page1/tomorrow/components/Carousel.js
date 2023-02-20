import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { config } from "react-spring"
const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
})

export default function Carroussel(props) {
  const table = (props.cards ?? []).map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) }
  })

  const [offsetRadius, setOffsetRadius] = useState(2)
  const [goToSlide, setGoToSlide] = useState(null)
  const [cards] = useState(table)

  useEffect(() => {
    setOffsetRadius(props.offset)
  }, [props.offset])

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        goToSlideDelay={100}
        animationConfig={{ config: config.stiff }}
      />
    </div>
  )
}
