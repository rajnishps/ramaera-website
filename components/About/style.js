import styled from "styled-components";
export const TrendingContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
`;
export const TrendingLeft = styled.div`
  width: 60%;
  height: 90vh;
  border: 1px solid white;
  border-radius: 20px;
  overflow: scroll;
  background:linear-gradient(180.93deg, #222222 -91.95%, rgba(65, 65, 65, 0) 99.2%),url("/background/Left Column (1).png");
  background-position: right;
  /* background-size: contain; */
  background-repeat: no-repeat;
`;
export const TrendingRight = styled.div`
  width: 30%;
  border: 1px solid white;
  height: 90vh;
  border-radius: 20px;
`;
export const TrendingHead = styled.h2`
  font-family: "Zilap Orion Personal Use";
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 26px;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin: 30px;
  padding-bottom: 15px;
  border-bottom: 4px solid white;
  width: 235px;
`;
export const TrendingTop = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;
export const TopIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IconImg = styled.img`
  width: 20px;
`;
export const IconInfo = styled.p`
  color: white;
  font-size: 0.8rem;
  margin-left: 5px;
`;