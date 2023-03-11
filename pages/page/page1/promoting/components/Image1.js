import styled from "styled-components";

const Image = styled.div`
  transform: scale(0.75);
  @media only screen and (max-width: 768px) {
    transform: scale(0.5);
    padding: 0 20vw;
  }
`;
const Image1 = () => {
  return (
    <Image>
      <img loading="lazy" alt="prompt" src="/content/promt1.png" />
    </Image>
  );
};

export default Image1;
