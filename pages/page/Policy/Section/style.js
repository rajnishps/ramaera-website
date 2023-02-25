import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const TabsList = styled.div`
  width: 22vw;
  height: 100%;
  background: linear-gradient(181.16deg, #ff7917 -26.31%, #ffdd2d 128.88%);

  @media (max-width: 768px) {
    min-width: 28vw;
  }
  @media (max-width: 600px) {
    min-width: 40vw;
  }
`;

export const Ul = styled.div`
  padding: 95px 20px;
  text-align: left;
`;

export const Li = styled.div`
  padding: 10px 0;
  position: relative;
  margin-bottom: 3px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.5s ease;
`;

export const TabsContent = styled.div`
  //flex-grow: 1;
  width: 80vw;
  height: 100%;
  padding: 0 8vw;
  overflow-y: scroll;
`;

export const TabBody = styled.div`
  // height: calc(100% - 140px);
  overflow: auto;
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
