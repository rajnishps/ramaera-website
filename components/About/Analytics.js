import React from "react";
import styled from "styled-components";
const AnalyticsMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  margin: 20px auto;
  margin-left: 30px;
  border-bottom: 3px solid white;
`;
const AnalyticsBtn = styled.button`
  width: 100px;
  height: 30px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 10px;
  border: none;
  margin-bottom: 5px;
`;
const AnalyticsHead = styled.h3`
  color: white;
  font-size: 1rem;
`;
const AnayliticsPara = styled.p`
    color: white;
    font-size:.7rem;
    margin-bottom: 10px;
`
const Analytics = () => {
  return (
    <AnalyticsMain>
      <AnalyticsBtn>Analytics</AnalyticsBtn>
      <AnalyticsHead>
        Many desktop publishing packages and web page
      </AnalyticsHead>
      <AnayliticsPara>December 29 2019</AnayliticsPara>
      <br />
      <AnayliticsPara>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget massa sollicitudin, cursus risus eu, vehicula metus. 
      </AnayliticsPara>
    </AnalyticsMain>
  );
};

export default Analytics;
