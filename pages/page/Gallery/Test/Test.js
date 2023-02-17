import React, { useEffect, useState } from "react";
import { ContainerTop,Tags,Button,TagsWrapper,Display,Container } from "./style";
import images from "./data";
import { SRLWrapper } from "simple-react-lightbox";
import Card from "./Card";

const options = {
  // settings: {
  // 	overlayColor: 'rgb(25, 136, 124)',
  // 	autoplaySpeed: 1500,
  // 	transitionSpeed: 900
  // },
  // buttons: {
  // 	backgroundColor: 'red',
  // 	iconColor: 'rgba(126, 172, 139, 0.8)'
  // },
 
};

function App() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    < >
    <ContainerTop>
     <Tags className="tags ">
         <TagButton
          name="all"
          tagActive={tag === "all" ? true : false}
          handleSetTag={setTag}
         />
        
        /
        <TagButton
          name="new"
          tagActive={tag === "new" ? true : false}
          handleSetTag={setTag}
        />
        /
        <TagButton
          name="free"
          tagActive={tag === "free" ? true : false}
          handleSetTag={setTag}
        />{" "}
        /
        <TagButton
          name="pro"
          tagActive={tag === "pro" ? true : false}
          handleSetTag={setTag}
        />
     </Tags>

      </ContainerTop>

      <Display>
      <SRLWrapper options={options}>
        <Container className="container">
          {filteredImages.map((image) => (

         <Card image={image} key={image.id} />
          )
          )}
        </Container>
      </SRLWrapper>
      </Display>
    </>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <Button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </Button>
  );
};

export default App;
