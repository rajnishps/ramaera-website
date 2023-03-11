import styled from "styled-components";

const Image = styled.img`
  left: 125px;
  @media only screen and (max-width: 768px) {
    left: 0;
    position: absolute;
    top: -200px;
    transform: scale(0.75);
    display: none;
  }
`;
const Dots = () => {
  return <Image src="/content/promtDots.png" alt="dots background" />;
};

export default Dots;
