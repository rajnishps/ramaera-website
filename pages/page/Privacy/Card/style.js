import styled from "styled-components";

export const Section = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: inset 0 100px 100px 1px rgb(0 0 0);
`;

export const Item = styled.div`
  padding: 50px 40px;
  margin: 2rem;
  margin-bottom: 3rem;
  width: 300px;
  height: 350px;
  padding: 30px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 0px 0 white, 0px 0px 4px white, 0px 0px 4px white,
    0px 0px 10px white;

  &:hover {
    box-shadow: 0px 0px 0 white, 0px 0px 10px white, 0px 0px 10px white,
      0px 0px 10px white;
    transform: scale(1.05);
  }
`;

export const Title = styled.h3`
  margin-top: 1rem;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: personal !important;
  text-overflow: ellipsis;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 15px 0;
  color: whitesmoke;
  text-align: left;
  word-break: break-all;
`;

export const Icon = styled.div`
  display: "flex";
  justify-content: "center";
  align-items: "center";
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  overflow-x: visible;
  box-shadow: 0 0 0.2em 0.2em white;
`;

export const Vector = styled.img`
  width: 100%;
`;

export const ZoomIn = styled.div`
  position: absolute;
  margin: 2rem;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const ZoomDetails = styled.div`
  overflow-y: scroll;
  @media (max-width: 600px) {
    width: 100% !important;
    padding: 0;
  }
`;

export const ZoomName = styled.h3`
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: personal !important;
  font-weight: 400;
  font-size: 2.2rem;
`;

export const ZoomTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: 400;
  color: #a58e7c;
`;

export const ZoomAbout = styled.p`
  color: white;
  margin: 20px 0;
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  line-height: 1.4;
  padding: 14px 28px;
  width: 80%;
  height: 75%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media (max-width: 600px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 10px;
    top: unset;
    left: unset;
    height: auto;
    width: 90%;
    margin: 20px;
    max-height: 95svh;
  }
`;

export const CloseImg = styled.img`
  position: inherit;
  top: 65px;
  left: 88%;
  width: 40px;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 600px) {
    position: fixed;
    top: 8px;
    left: 88%;
  }
`;
const Style = () => {
  return <div>StyleImage</div>;
};

export default Style;
