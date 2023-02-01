import React from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import { Container } from "./components/Style"
import Item from "./components/Item"

const index = () => {
  const bg = "./background/bb.png"
  const svg1 = "./content/1.png"
  const svg2 = "./content/2.png"
  const svg3 = "./content/3.png"
  const svg4 = "./content/4.png"

  return (
    <PageLayout bg={bg}>
      <PageWidth width="1500px">
        <div
          style={{ width: "100%" }}
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-anchor-placement="top-center"
        >
          <Container>
            <Item
              img={svg1}
              number="1600000+"
              desc="Ramaera Group Direct Employees"
            />
            <Item
              img={svg2}
              number="20000"
              desc="FMCG Upcoming Mother Brands"
            />
            <Item img={svg3} number="10000+" desc="Hotels across pan India" />
            <Item
              img={svg4}
              number="5 Million"
              desc="Sustainable Livelihoods"
            />
          </Container>
        </div>
      </PageWidth>
    </PageLayout>
  )
}

export default index
