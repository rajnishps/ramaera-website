import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabsContent = styled.div`
  width: 80vw;
  height: 100%;
  overflow-y: scroll;
  padding: 0 5vw;
  justify-content: center;
  background-image: url("./content/mntns.png");
  background-size: cover;
  background-position: center;
`;

export const TabBody = styled.div`
  overflow: auto;
  padding: 2vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(rgb(40 39 39 / 20%));
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.11);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border: 1px solid rgba(255, 255, 255, 0.16);
`;

export const TabItem = styled.div`
  display: block;
`;

export const TabDetails = styled.div`
  p {
    margin-bottom: 20px;
  }
`;

const Style = () => {
  return <div>StyleImage</div>;
};

export default Style;
