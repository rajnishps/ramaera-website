import React, { useEffect, useState } from "react"
import {
  Gallery,
  ContainerTop,
  Tags,
  Button,
  Heading,
  Display,
  Container,
  Image,
  DisplayHeading,
  DisplayCard,
  DisplayWrapper,
  ImageWrapper,
} from "./style"
import { images } from "./../Collection/data"
import { SRLWrapper } from "simple-react-lightbox"
import Card from "./../Card/index"

const options = {
  // settings: {
}

const index = () => {
  const [tag, setTag] = useState("lead")
  const [filteredImages, setFilteredImages] = useState(["lead"])

  useEffect(() => {
    setFilteredImages(images.filter((image) => image.tag === tag))
  }, [tag])

  const filterData = () =>
    filteredImages.map((image) => (
      <DisplayWrapper>
        <DisplayCard>
          <Card image={image} key={image.id} />
        </DisplayCard>
      </DisplayWrapper>
    ))

  return (
    <>
      <Gallery>
        <ContainerTop>
          <Image></Image>
          <Heading>
            <h1>Gallery</h1>
          </Heading>
          <Tags className="tags ">
            <TagButton
              name="lead"
              tagActive={tag === "lead" ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name="team"
              tagActive={tag === "team" ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name="industry"
              tagActive={tag === "industry" ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name="fest"
              tagActive={tag === "fest" ? true : false}
              handleSetTag={setTag}
            />
          </Tags>
        </ContainerTop>
      </Gallery>

      <Display>
        <SRLWrapper options={options}>
          <Container>
            <DisplayHeading>
              {filteredImages[0].heading}
              <p>{filteredImages[0].details}</p>
            </DisplayHeading>
            <ImageWrapper>{filterData()}</ImageWrapper>
          </Container>
        </SRLWrapper>
      </Display>
    </>
  )
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <Button
      className={`tag ${tagActive ? "activeLine" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </Button>
  )
}

export default index
