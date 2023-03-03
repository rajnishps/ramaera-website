import styled from "styled-components";

export const Image = styled.div`
  height: 35rem;
  width: 40rem;
  video {
    margin-top: -80px;
    margin-left: -100px;
  }
  @media only screen and (max-width: 768px) {
    transform: scale(0.9);
  }
`;
export const CustomText = styled.h1`
  font-size: 40px;
  line-height: 55px;
  color: #fff;
  text-align: right;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
export const Responsive = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
  }
`;
const StyleImage = () => {
  return <div>StyleImage</div>;
};

export default StyleImage;
