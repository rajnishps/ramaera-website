import styled from "styled-components";

export const Head = styled.div`
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
  background-image: url("content/privacy.jpg");
  height: 20vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.2;
`;

export const Heading = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto;
`;

const Style = () => {
  return <div>StyleImage</div>;
};

export default Style;
