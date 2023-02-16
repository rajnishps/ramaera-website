import styled from "styled-components";

export const InnitiveContainer = styled.div`
  width: 100%;
`;
export const InnitiativeHead = styled.h1`
  font-family: "Zilap Orion Personal Use";
  font-style: normal;
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 65px;
  text-align: center;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const Best = styled.div`
  width: 90%;
  margin: 10px auto;
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
  margin-top: 70px;
  @media (max-width: 600px){
    flex-direction: column;
  }
`;

//Left section css
export const Left1 = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px solid white;
  height: 100%;
`;
export const LeftHead = styled.h3`
  font-family: "Zilap Orion Personal Use";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 50px;
  text-align: left;
  color: #ffffff;
  border-bottom: 2px solid #ffe259;
  margin-top: 20px;
  margin-right: 50px;
`;
export const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
`;
export const MenuData = styled.div`
  display: flex;
  width: 100%;
  margin: 20px auto;
`;
export const ArrowImg = styled.img`
  width: 22px;
`;
export const MenuPara = styled.p`
  color: white;
  font-size: 0.8rem;
  margin-left: 5px;
`;

//Right section css
export const RightContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const ImgBg = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url("/background/Inn.jpeg");
  background-position: center;
  background-size: cover;
  width: 900px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 600px){
    width: 443px;
    height: 300px;
    border-radius: 0px 0px 20px 20px ;
    
  }
`;
export const Heading = styled.h2`
  font-family: "Zilap Orion Personal Use";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 117%;
  background: linear-gradient(90deg, #e65c00 0%, #f9d423 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  opacity: 0.99;
  text-align: center;
  text-shadow: 0px 20px 20px rgba(0, 0, 0, 0.5);
`;

export const ReverseText = styled.img`
  width: 220px;
  position: absolute;
  bottom: 11%;
`;
export const Info = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
`;
export const InfoContainer = styled.div`
  display: flex;
`;
export const InfoHead = styled.h2`
  color: white;
  text-align: center;
`;

export const InfoPara = styled.p`
  font-size: 0.7rem;
  color: white;
  margin-top: 7px;
`;
