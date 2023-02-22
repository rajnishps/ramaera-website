import React, { useState } from "react";
import Cards from "react-animated-3d-card";

import {
  CardContainer,
  CardImg,
  CardDetails,
  Name,
  Title,
  ZoomIn,
  ZoomImage,
  ZoomDetails,
  Modal,
  Overlay,
  ModalContent,
  ZoomName,
  ZoomTitle,
  ZoomAbout,
  CloseImg,
} from "./style.js";

const Card = ({ image }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (typeof window !== "undefined") {
    if (modal) {
      document.body.classList.add("fixed-position");
    } else if (!modal) {
      document.body.classList.remove("fixed-position");
    }
  }
  console.log(modal);
  return (
    <>
      <CardContainer
        onClick={() => {
          toggleModal();
        }}
      >
        <Cards
          style={{
            backgroundImage: `url(${image.imageName})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.8",
          }}
          shineStrength={0.75}
        >
          <CardImg key={image.id}>
            <CardDetails>
              <Name>{image.name}</Name>
              <Title>{image.title}</Title>
            </CardDetails>
          </CardImg>
        </Cards>
      </CardContainer>

      {/* Popup box Open */}
      <ZoomIn
        style={{
          zIndex: modal ? "100" : "-1",
        }}
      >
        {modal && (
          <div>
            <Modal>
              <ModalContent>
                <ZoomImage style={{ width: image.title ? "50%" : "100%" }}>
                  <img
                    style={{ objectFit: "cover" }}
                    src={image.imageName}
                    alt=""
                  />
                </ZoomImage>
                <ZoomDetails
                  style={{
                    width: image.title ? "50%" : "0%",
                    display: image.title ? "block" : "none",
                  }}
                >
                  {image.title ? (
                    <>
                      <ZoomName>{image.name}</ZoomName>
                      <ZoomTitle>{image.title}</ZoomTitle>
                      <ZoomAbout>{image.about}</ZoomAbout>
                    </>
                  ) : (
                    <div> </div>
                  )}
                </ZoomDetails>
              </ModalContent>
            </Modal>
            <CloseImg src="/content/closeIcon.png" onClick={toggleModal} />
          </div>
        )}
      </ZoomIn>
    </>
  );
};

export default Card;
