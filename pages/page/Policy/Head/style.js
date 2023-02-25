import styled from "styled-components";

export const Gallery = styled.div`
  height: 20vh;
  width: 100vw;
`;

export const ContainerTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Image = styled.div`
  /* background-image: url("content/galleryImg.jpg"); */

  height: 20vh;
  width: 100%;
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center bottom;
`;

export const Heading = styled.div`
  position: absolute;
  margin: auto;
`;

const Style = () => {
  return <div>StyleImage</div>;
};

export default Style;
