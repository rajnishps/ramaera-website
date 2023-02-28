import styled from "styled-components";

export const Section = styled.div`
  background-image: url("./content/mntns.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  width: 100%;
  padding-top: 50px;
  // background: darkgray;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.div`
  border: 2px solid black;
  padding: 50px 40px;
  background-color: #ffffff;
  margin: 5px;
  margin-bottom: 3rem;
  width: 300px;
  height: 350px;
  padding: 30px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0px 10px 10px 0 rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  color: #0e224a;
  margin-top: 1rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 5px;
  margin-top: 10px;
`;

export const Icon = styled.div`
  background: gold;
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
`;

export const Vector = styled.img`
  width: 2.5rem;
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
  background: rgba(0, 0, 0, 0.6);
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
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
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
