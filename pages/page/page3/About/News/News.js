import React from "react";
import styled from "styled-components";
const NewsContainer = styled.div`
  width: 95%;
  margin: 20px auto;
  overflow: scroll;
  @media (max-width: 600px){
    width: 90%;
    margin: 0px auto;
  
  }
  
`;
const NewsBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px){
   flex-direction: column;
   align-items: center;
   margin-top: 20px;
  }
`;
const NewsIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const NewsHead = styled.p`
  width: 90%;
  margin-left: 20px;
  font-size: 1.1rem;
  line-height: 29px;
  letter-spacing: 0.2px;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 600px){
    font-size: 0.9rem;
    line-height: 23px;
    margin-bottom: 10px;
  }
`;
const NewsImg = styled.img`
  width: 180px;
  height: 100px;
  background-image: url("/background/factory.jpeg");
  background-position: center;
  background-size: cover;
  border: 1px solid white;
  border-radius: 10px;
  @media (max-width: 600px){
   margin: 0px auto;
  }
`;
const Newspara = styled.p`
    color: white;
    font-size: .6rem;
`
const NewsLater = styled.img`
    width: 15px;
    @media (max-width: 600px){
      width: 10px;
      margin-left: 5px;
    }
`
const Border = styled.div`
    width: 420px;
    height: 2px;
    background-color: white;
    margin-left: 20px;
    margin-top: 15px;
    border-radius: 20px;
    @media (max-width: 600px){
      margin-left: 30px;
      margin-bottom: 20px;
    }
`
const News = () => {
  return (
    <NewsContainer>
      <NewsBox>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <NewsIcon src={"/background/check.png"} /> */}
              <NewsHead>
                Rijeka begins year of European Capital of Culture 2020 with
                opening ceremony
              </NewsHead>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",width:"90%", margin:"0px auto"}}>
              <Newspara>Dec 30 2021</Newspara>
              <Newspara>Euro News</Newspara>
              <Newspara>4 min read</Newspara>
              <NewsLater src="/background/smallbook.png" alt="" />
              <NewsLater src="/background/share.png" alt="" />
              <NewsLater src="/background/more.png" alt="" />
            </div>
            <Border/>
          </div>
          <div>
            <NewsImg />
          </div>

      </NewsBox>
    </NewsContainer>
  );
};

export default News;
