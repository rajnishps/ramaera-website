import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 0 5rem 0;
  display: flex;
`;

export const Heading = styled.div`
  justify-content: center;
  width: 50%;
  margin: auto;
  padding: 0 0 0 2rem;
  @media (max-width: 800px) {
    padding: 0 1rem;
    margin: 0;
    width: 100%;
    position: absolute;
  }
`;

export const MapIcon = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const MapBox = styled.div`
  width: 100%;
  height: 400px;
  @media (max-width: 600px) {
    padding: 0 20px;
    height: 200px;
  }
`;

export const ImagePoint = styled.div`
  background-image: url("/content/map.png");
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;

  h3 {
    display: none;
    position: relative;
    left: 284px;
    top: 184px;
    height: 50px;
    font-family: personal;
    background: #ffb76b;
    background: linear-gradient(to right, #ffa73d, gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #ramaera:hover ~ h3 {
    display: block;
  }
`;

export const ImgPoint1 = styled.img`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ImgPoint2 = styled.img`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ImgPoint3 = styled.img`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ImgPointMain = styled.a`
  img {
    position: relative;
    left: 240px;
    top: 210px;
    height: 50px;
    width: 50px;
    @media (max-width: 600px) {
      height: 25px;
      width: 25px;
      top: 65px;
      left: 122px;
    }
  }
`;

const StyleImage = () => {
  return <div>StyleImage</div>;
};

export default StyleImage;
