import styled from "styled-components";

export const Responsive = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
export const Image = styled.div`
  height: 30rem;
  width: 40rem;
  video {
    height: 120%;
    width: 120%;
  }
  @media only screen and (max-width: 768px) {
    video {
      margin-top: -180px;
      height: 120%;
      width: 100%;
    }
  }
`;
const StyleImage = () => {
  return <div>StyleImage</div>;
};

export default StyleImage;
