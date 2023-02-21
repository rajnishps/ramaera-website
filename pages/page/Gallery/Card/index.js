import React, { useState } from "react";
import styled from "styled-components";
import { AiFillCloseSquare } from "react-icons/ai";

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
  CloseModal,
  ZoomName,
  ZoomTitle,
  ZoomAbout,
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
      <CardContainer>
        <CardImg key={image.id} onClick={toggleModal}>
          <img src={image.imageName} alt="" />

          <CardDetails>
            <Name>{image.name}</Name>
            <Title>{image.title}</Title>
          </CardDetails>
        </CardImg>
      </CardContainer>
      {/* Popup box Open */}
      <ZoomIn
        style={{
          zIndex: modal ? "3" : "-1",
        }}
      >
        {modal && (
          <Modal>
            <Overlay></Overlay>
            <ModalContent>
              <ZoomImage style={{ width: image.title ? "50%" : "100%" }}>
                <img src={image.imageName} alt="" />
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
              <CloseModal onClick={toggleModal}>
                <img
                  src="/content/closeIcon.png"
                  style={{
                    fontSize: "5px",
                    color: "orange",
                    background: "white ",
                    position: "absolute",
                    top: "-15px",
                    right: "-15px",
                  }}
                />
              </CloseModal>
            </ModalContent>
          </Modal>
        )}
      </ZoomIn>
    </>
  );
};

export default Card;
