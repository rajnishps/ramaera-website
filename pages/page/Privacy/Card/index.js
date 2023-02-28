import Image from "next/image";
import React, { useState } from "react";
import {
  Section,
  Item,
  Icon,
  Title,
  Text,
  Vector,
  ZoomIn,
  ZoomDetails,
  Modal,
  ModalContent,
  ZoomName,
  ZoomTitle,
  ZoomAbout,
  CloseImg,
} from "./style.js";

import data from "./../Collection/data";

const Card = ({ image = [] }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div>
        <Section>
          {data.map((image) => (
            <Item>
              <Icon>
                <Vector src={image.icon} />
              </Icon>
              <Title>{image.heading}</Title>
              <Text>{image.para[0].slice(0, 100)}....</Text>
              <button
                onClick={() => {
                  toggleModal();
                }}
              >
                More
              </button>
            </Item>
          ))}
        </Section>

        {/* Popup box Open */}
        <ZoomIn
          style={{
            zIndex: modal ? "100" : "-1",
          }}
        >
          {modal && (
            <div>
              {data.map((image) => (
                <Modal>
                  <ModalContent>
                    <ZoomDetails>
                      <ZoomName>
                        {image.heading} {console.log(image.heading)}
                      </ZoomName>
                      <ZoomTitle>{image.heading}</ZoomTitle>
                      <ZoomAbout>{image.para}</ZoomAbout>
                    </ZoomDetails>
                  </ModalContent>
                  <CloseImg
                    src="/content/closeIcon.png"
                    onClick={toggleModal}
                  />
                </Modal>
              ))}
            </div>
          )}
        </ZoomIn>
      </div>
    </>
  );
};

export default Card;
