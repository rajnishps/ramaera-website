import styled from "styled-components";

const Bg = styled.div`
  margin-top: 10rem;
  background-image: url("/background/curve.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 1000px;
  width: 100vw;
  z-index: -1;
  @media only screen and (max-width: 1200px) {
   // height: 100vh;
    background: transparent;
  }
  @media only screen and (max-width: 450px) {
   height: 650px;
  }
`;
const CustomBg = () => {
  return <Bg />;
};

export default CustomBg;
