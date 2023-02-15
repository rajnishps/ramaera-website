import styled from "styled-components";
export const ValueContainer = styled.div`
  width: 100%;
  margin: 20% auto;
`;
export const ValParaContainer = styled.div`
  width: 60%;
  margin: 20px auto;
`;
export const ValuePara = styled.p`
  color: white;
  text-align: center;
  font-size: 1.5rem;
`;

export const InnovationDiv = styled.div`
  width: 85%;
  margin: 50px auto;
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
`;
export const InnovationHead = styled.div`
  font-family: "Zilap Orion Personal Use";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 30px;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin: 2rem;
  margin-bottom: 0;
`;
export const Img = styled.img`
  width: 350px;
  height: 350px;
  margin: 20px;
`;
export const InnovationLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InnoParaContainer = styled.div`
    width: 70%;
    border-left: 2px solid white;
`
export const InnoPara = styled.p`
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 40px;
  color: #ffffff;
  margin-left: 50px;
  width: 85%;
`;
export const InnovatinRight = styled.div`
  width: 60%;
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
`