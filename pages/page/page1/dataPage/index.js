import React from "react"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import { Container } from "./components/Style"
import Item from "./components/Item"
import styled from "styled-components"

const PolyBg = styled.div`
  @media only screen and (max-width: 768px) {
    opacity: 50%;
  }
`
const Image = styled.img`
  height: 80vh;
`
const index = () => {
  const bg = "./background/bb.png"
  const svg1 = "./content/1.png"
  const svg2 = "./content/2.png"
  const svg3 = "./content/3.png"
  const svg4 = "./content/4.png"

  return (
    <PageLayout padding={0}>
      <PageWidth width="1500px">
        <div
          data-aos="slide-right"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          <Container>
            <Item
              img={svg1}
              number="200+"
              desc="Ramaera Group Direct Employees"
            />
            <Item img={svg2} number="1000" desc="FMCG Upcoming Mother Brands" />
            <Item img={svg3} number="15000+" desc="Community Members" />
            <Item img={svg4} number="15" desc="States Reach" />
          </Container>
        </div>
      </PageWidth>
      <div
        style={{ position: "absolute", right: "0", top: "0", zIndex: -1 }}
        data-aos="slide-left"
        data-aos-duration="500"
        data-aos-anchor-placement="center-bottom"
      >
        <PolyBg>
          <Image
            src={"/background/leftPoly.png"}
            alt="left polygon background"
          />
        </PolyBg>
      </div>
    </PageLayout>
  )
}

export default index
