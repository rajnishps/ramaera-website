import styled from "styled-components";
export const ValueContainer = styled.div`
  width: 100%;
  margin: 20% auto;
`;
export const ValParaContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  @media (max-width: 600px){
    width: 80%;
    
  }
`;

export const InnovationDiv = styled.div`
  width: 85%;
  margin: 50px auto;
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
  height: 80vh;
  @media (max-width: 600px){
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
`;

export const InnovationHead = styled.div`
  font-family: "Zilap Orion Personal Use";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 60px;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin: 2rem;
  margin-bottom: 0;
  @media (max-width: 600px){
    font-size: 2rem;
    margin: 20px auto;
  }
`;

export const Img = styled.img`
  width: 100px;
  margin: 20px;
  object-fit: contain;
  @media (max-width: 600px){
    width: 50%;
    height: 50%;
  }

`;
export const InnovationLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 5%;
  @media (max-width: 600px){
    width: 100%;
  }
`;
export const InnoParaContainer = styled.div`
    width: 50%;
    border-left: 2px solid white;
    @media (max-width: 600px){
      width: 100%;
      margin-bottom: 20px;
    }
`
export const InnovatinRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Arrow = styled.img`
    width: 70px;
    position: absolute;
    top: -30px;
    right: 40px;
    z-index: -10;
    @media (max-width: 600px){
      width: 40px;
      top: 90%;
      left: -20%;
    }
    
`