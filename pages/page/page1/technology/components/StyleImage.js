import styled from "styled-components";

export const Image = styled.div`
  height: 35rem;
  width: 40rem;
  @media only screen and (max-width: 768px) {
    transform: scale(0.9);
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
