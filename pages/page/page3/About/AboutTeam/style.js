import styled from "styled-components";

export const TeamContainer = styled.div`
  width: 70%;
  margin: 10% auto;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/background/Team.jpeg");
  /* height: 60vh; */
  background-position: center;
  background-size: cover;
  border: 3px solid white;
  border-radius: 20px;
  position: relative;
  padding: 3rem;
  @media (max-width: 600px){
    width: 90%;
  }
`;
export const TeamHead = styled.h1`
  font-family: "Zilap Orion Personal Use";
  font-style: normal;
  font-weight: 400;
  font-size: 3rem;
  line-height: 70px;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: center;
  padding-top: 20px;
  @media (max-width: 600px){
    font-size: 2rem;
    line-height: 50px;
  }
`;

export const LeftTeam = styled.div`
  width: 50%;
  @media (max-width: 600px){
    width: 100%;
  }
`;
export const ParaBox = styled.div`
  width: 50%;
  height: 20vh;
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-top: 60px;
  border-left: 4px solid white;
  @media (max-width: 600px){
    width: 90%;
  }
`;
export const LeftPara = styled.p`
  color: white;
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 25px;
  margin-left: 20px;
  @media (max-width: 600px){
    font-size: 0.9rem;
  }
`;
export const RightTeam = styled.div`
  width: 35%;
  margin-top: 40px;
  @media (max-width: 600px){
    width: 90%;
  }
`;
export const RightHead = styled.h3`
  color: white;
  margin-top: 10px;
  font-family: "Zilap Orion Personal Use";
  font-size: 1rem;
  @media (max-width: 600px){
    font-size: 90%;
  }
`;
export const RightPara = styled.p`
  color: white;
  font-size: 0.8rem;
  @media (max-width: 600px){
    line-height: 20px;
  }
`;
export const Dots = styled.img`
    position: absolute;
    width: 90px;
    bottom: -7%;
    left: 3%;
    @media (max-width: 600px){
      width: 50px;
      bottom: -2%;
      left: 4%;
    }
`