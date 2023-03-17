import styled from "styled-components";

const Image = styled.img`
  position: absolute;
  height: 350px;
  top: 340px;
  left: 155px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Circle = () => {
  return <Image src="/content/promtCircle.png" alt="circle background" />;
};

export default Circle;
