import styled from "styled-components";

export const Gallery = styled.div`
  height: 55vh;
  width: 100vw;
`;

export const ContainerTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Image = styled.div`
  background-image: url("./content/mntns.png");
  height: 55vh;
  width: 100%;
  box-shadow: inset 0 0 50px 20px rgba(0, 0, 0, 0.5);
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center bottom;
  box-shadow: inset 0 -100px 100px 1px rgb(0 0 0 / 100%);
`;

export const Heading = styled.div`
  position: absolute;
  margin: auto;
  top: 20vh;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;
  @media (max-width: 600px) {
    top: 2vh;
  }
`;

export const SubHeading = styled.p`
  color: white;
  margin: 1rem 8rem;
  @media (max-width: 600px) {
    margin: 1rem;
  }
`;

export const Tags = styled.div`
  position: absolute;
  text-align: center;
  margin: 50px auto;
  display: -webkit-box;
  border-bottom: 1px solid grey;
  -ms-flex-pack: justify;
  padding-bottom: 10.5px;
`;

export const Button = styled.p`
  padding: 15px 40px;
  color: white;
  cursor: pointer;
  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const Display = styled.div`
  background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(62, 62, 62) 100%);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DisplayHeading = styled.h1`
  margin: 20px;
  text-align: center;
  color: white;
  p {
    font-size: 15px;
    font-weight: 100;
  }
`;

export const DisplayWrapper = styled.div`
  display: flex;
  padding-bottom: 30px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 100px;
  box-shadow: inset 0 -100px 100px 1px rgb(0 0 0 / 100%);
`;

export const DisplayCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  color: red;
`;

const Style = () => {
  return <div>StyleImage</div>;
};

export default Style;
