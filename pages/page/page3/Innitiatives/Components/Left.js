import styled from "styled-components"
import {
  LeftHead,
  Left1,
  LeftMenu,
  MenuData,
  ArrowImg,
  MenuPara,
} from "../Components/style"
import { MdOutlineDoubleArrow } from "react-icons/md"
import Text from "../../../../../components/Text/Text"
const LeftContainer = styled.div`
  width: 30%;
  @media (max-width: 600px) {
    width: 100%;
  }
`
const Left = () => {
  return (
    <LeftContainer>
      <Left1>
        <div data-aos="fade-right" data-aos-anchor-placement="top-bottom">
          <Text
            Text="ONLY THE BEST"
            lg="white"
            font
            size="1.7rem"
            lh="35px"
            width="100%"
            mwidth="100%"
            fw="500"
            mlh="30px"
            xmsize="1.7rem"
            xssize="4vw"
            msize="1.5rem"
            mpadding="0rem 0 1rem 0 "
            padding="0rem 1.2rem 0.6rem 0"
            mmargin="1rem 0 1rem 0"
            tsdo="none"
            bbottom="3px solid white"
            mmwidth="90vw"
          />
          {/* <LeftHead>ONLY THE BEST</LeftHead> */}
        </div>
        <div data-aos="fade-right">
          <LeftMenu>
            <MenuData>
              {/* <ArrowImg src={"/background/arrowImg.png"} /> */}
              <MdOutlineDoubleArrow style={{ color: "white" }} />

              <MenuPara>Health & sanitation</MenuPara>
            </MenuData>
            <MenuData>
              <MdOutlineDoubleArrow style={{ color: "white" }} />
              <MenuPara>Primary Education</MenuPara>
            </MenuData>
            <MenuData>
              <MdOutlineDoubleArrow style={{ color: "white" }} />
              <MenuPara>Livestock Development</MenuPara>
            </MenuData>
            <MenuData>
              <MdOutlineDoubleArrow style={{ color: "white" }} />
              <MenuPara>Solid Waste Management</MenuPara>
            </MenuData>
            <MenuData>
              <MdOutlineDoubleArrow style={{ color: "white" }} />
              <MenuPara>Skilling & Vocational Training</MenuPara>
            </MenuData>
            <MenuData>
              <MdOutlineDoubleArrow style={{ color: "white" }} />
              <MenuPara>Women Empowerment</MenuPara>
            </MenuData>
            <MenuData>
              <MdOutlineDoubleArrow style={{ color: "white" }} />
              <MenuPara>Watershed Development Programme</MenuPara>
            </MenuData>
            <MenuData>
              <MdOutlineDoubleArrow style={{ color: "white" }} />
              <MenuPara>Afforestation Programme</MenuPara>
            </MenuData>
          </LeftMenu>
        </div>
      </Left1>
    </LeftContainer>
  )
}

export default Left
