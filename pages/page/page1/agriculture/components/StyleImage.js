import styled from "styled-components";

export const Image = styled.div`
  height: 30rem;
  width: 35rem;
  @media only screen and (max-width: 1200px) {
    height: 25rem;
    transform: scale(0.9);
  }
  @media only screen and (max-width: 1000px) {
    height: 30rem;
    width: 35rem;
    margin-top: -10%;
    margin-left: 5vw;
  }
  @media only screen and (max-width: 768px) {
    video {
      margin-top: 200px;
      padding-right: 50px;
      height: 100%;
      width: 100%;
    }
  }
`;
export const Responsive = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const StyleImage = () => {
  return <div>StyleImage</div>;
};

export default StyleImage;
