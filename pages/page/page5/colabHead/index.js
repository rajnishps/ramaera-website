import React from "react"
import styled from "styled-components"
import {
  Container,
  Heading,
  MapIcon,
  ImagePoint,
  MapBox,
  ImgPoint1,
  ImgPoint2,
  ImgPoint3,
  ImgPointMain,
} from "./style"

const index = () => {
  return (
    <>
      <Container>
        <Heading>
          <h2>
            Lets <br />
            Collaborate
          </h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </h3>
        </Heading>

        <MapIcon>
          <MapBox>
            <ImagePoint>
              <ImgPoint1
                style={{
                  position: "relative",
                  left: "80px",
                  top: "150px",
                  height: "50px",
                  width: "50px",
                }}
                src="/content/pointGrey.png"
              />
              <ImgPoint2
                style={{
                  position: "relative",
                  left: "106px",
                  top: "285px",
                  height: "50px",
                  width: "50px",
                }}
                src="/content/pointGrey.png"
              />
              <ImgPoint3
                style={{
                  position: "relative",
                  left: "330px",
                  top: "100px",
                  height: "50px",
                  width: "50px",
                }}
                src="/content/pointGrey.png"
              />
              <ImgPointMain href="#" id="ramaera">
                <img src="/content/point.png" />
              </ImgPointMain>
              <h3>Ramaera Industries</h3>
            </ImagePoint>
          </MapBox>
        </MapIcon>
      </Container>
    </>
  )
}

export default index
