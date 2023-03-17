import styled from "styled-components";

export const Image = styled.div`
  height: 32rem;
  width: 33rem;
  video {
    position: absolute;
    height: 85%;
    width: 90%;
  }
  @media only screen and (max-width: 768px) {
    width: 95vw;
    margin-top: 20px;
    video {
      width: 100%;
      height: 100%;
      margin-top: -160px;
    }
  }
  /* @media only screen and (max-width: 400px) {
    margin-top: 150px;
    video {
      margin-top: -200px;
    }
  } */
`;
export const Responsive = styled.div`
  display: flex;
  align-items: center;
  //justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const StyleImage = () => {
  return <div>StyleImage</div>;
};

export default StyleImage;
