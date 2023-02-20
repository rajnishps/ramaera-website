import styled from "styled-components";
import { LeftHead, Left1, LeftMenu,MenuData,ArrowImg,MenuPara } from "../Components/style";
const LeftContainer = styled.div`
  width: 30%;
  @media (max-width: 600px){
    width: 100%;
  }
`
const Left = () => {
  return (
    <LeftContainer>
      
      <Left1>
      <div data-aos="fade-right"
      data-aos-anchor-placement="top-bottom">
        <LeftHead>ONLY THE BEST</LeftHead>
        </div>
        <div data-aos="fade-right">
        <LeftMenu>
          <MenuData>
            <ArrowImg src={"/background/arrowImg.png"} />
            <MenuPara>Health & sanitation</MenuPara>
          </MenuData>
          <MenuData>
            <ArrowImg src={"/background/arrowImg.png"} />
            <MenuPara>Primary Education</MenuPara>
          </MenuData>
          <MenuData>
            <ArrowImg src={"/background/arrowImg.png"} />
            <MenuPara>Livestock Development</MenuPara>
          </MenuData>
          <MenuData>
            <ArrowImg src={"/background/arrowImg.png"} />
            <MenuPara>Solid Waste Management</MenuPara>
          </MenuData>
          <MenuData>
            <ArrowImg src={"/background/arrowImg.png"} />
            <MenuPara>Skilling & Vocational Training</MenuPara>
          </MenuData>
          <MenuData>
            <ArrowImg src={"/background/arrowImg.png"} />
            <MenuPara>Women Empowerment</MenuPara>
          </MenuData>
          <MenuData>
            <ArrowImg src={"/background/arrowImg.png"} />
            <MenuPara>Watershed Development Programme</MenuPara>
          </MenuData>
          <MenuData>
            <ArrowImg src={"/background/arrowImg.png"} />
            <MenuPara>Afforestation Programme</MenuPara>
          </MenuData>
        </LeftMenu>
        </div>
      </Left1>
      
    </LeftContainer>
  );
};

export default Left;
