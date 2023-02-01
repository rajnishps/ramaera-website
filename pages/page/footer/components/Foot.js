import styled from "styled-components"

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
`
const Link = styled.a`
  font-size: 10px;
  margin-bottom: 1rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
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
  height: 2px;
  width: 80vw;
  font-size: 10px;
  margin-bottom: 1rem;
  color: white;
`
const Foot = () => {
  return (
    <>
      <Hr />
      <FootContainer>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Use</Link>
        <Link href="#">Sales and Refunds</Link>
        <Link href="#">Legal</Link>
        <Link href="#">Site Map</Link>
      </FootContainer>
      <CopyRight>© {year} All Rights Reserved</CopyRight>
    </>
  )
}

export default Foot
