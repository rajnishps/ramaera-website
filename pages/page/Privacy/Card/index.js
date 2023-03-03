import React, { useState } from "react"
import Button from "../../../../components/Button/Button"

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
} from "./style.js"

import { data } from "./../Collection/data"

const Card = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <div id="policy">
        <Section>
          {data.map((image) => (
            <Item>
              <Icon>
                <Vector src={image.icon} />
              </Icon>
              <Title>{image.heading}</Title>
              <Text>{image.para[0].slice(0, 150)} . . . . . </Text>

              <Button
                br="5px"
                bg="linear-gradient(90deg,#FFE259 0%,#FFA751 100%);"
                width="20px"
                height="45px"
                Text="Read More "
                fontSize="1rem"
                padding="10px 20px"
                fw="500"
                sh
                onClick={() => {
                  toggleModal()
                }}
              />
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
                      <ZoomAbout>
                        {image.para.map((para1) => (
                          <p style={{ paddingBottom: "10px" }}>{para1}</p>
                        ))}
                      </ZoomAbout>
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
  )
}

export default Card
