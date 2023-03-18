import styled from "styled-components"
import Text from "../../../../../components/Text/Text"
import NextLink from "next/link"

const d = new Date()
let year = d.getFullYear()
const FootContainer = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50px;
  display: flex;
  gap: 50px;
  bottom: 100px;
  left: 10vw;
  color: white;
  align-items: center;
  @media only screen and (max-width: 1200px) {
    left: auto;
    right: auto;
    gap: 20px;
  }
  @media only screen and (max-width: 768px) {
    position: static;
    height: 10px;
    flex-direction: column;
    margin: 0 auto;
  }
  @media only screen and (max-width: 450px) {
    gap: 10px;
    width: 85vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`
const Link = styled(NextLink)`
  font-size: 10px;
  margin-bottom: 1rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
  @media only screen and (max-width: 450px) {
    margin: 1rem;
  }
`
const Hr = styled.hr`
  position: absolute;
  bottom: 160px;
  left: 10vw;
  color: white;
  height: 2px;
  width: 80vw;
  background: #fff;
`
const CopyRight = styled.div`
  position: absolute;
  font-weight: 100;
  bottom: 110px;
  left: 900px;
  color: white;
  height: 13px;
  width: 80vw;
  font-size: 10px;
  margin-bottom: 1rem;
  color: white;
  @media only screen and (max-width: 768px) {
    width: fit-content;
    left: auto;
    right: auto;
    bottom: 80px;
  }
`
const Foot = () => {
  return (
    <>
      <Hr />
      <FootContainer>
        <Link href="/DistributionChannel">
          <div class="glow_button">
            <Text
              Text="Become a part of Distribution Channel"
              lg="linear-gradient(90deg, white 0%, white 100%)"
              font
              padding=" 0 "
              size="14px"
              msize="14px"
              align="center"
              mpadding="1vw"
            />
          </div>
        </Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/legal">Legal</Link>

        {/* <Link href="#">Site Map</Link> */}
      </FootContainer>
      <CopyRight>© {year} All Rights Reserved</CopyRight>
    </>
  )
}

export default Foot
