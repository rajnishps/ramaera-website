import styled from "styled-components";
import { LeftHead, Left1, LeftMenu,MenuData,ArrowImg,MenuPara } from "../Components/style";

const Left = () => {
  return (
    <div style={{width:"30%"}}>
      <Left1>
        <LeftHead>ONLY THE BEST</LeftHead>
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
      </Left1>
    </div>
  );
};

export default Left;
