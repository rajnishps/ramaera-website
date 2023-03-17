import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 0 5rem 0;
  display: flex;
  margin-top:120px
`;

export const Heading = styled.div`
  justify-content: center;
  //width: 50%;
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
  width: 100vw;
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/content/map.png");
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const HoverText = styled.div`
  opacity: 0;
  padding-top: 2%;
  margin: 25% 0% 0% 40%;
  height: 150px;
  width: 250px;
  font-family: personal;
  background: #ffb76b;
  background: linear-gradient(to right, #ffa73d, gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    opacity: 100;
  }
`;

const StyleImage = () => {
  return <div>StyleImage</div>;
};

export default StyleImage;
