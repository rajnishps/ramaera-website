import React from "react"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import { Responsive } from "./components/Style"
import Links from "./components/Links"
import Logo from "./components/Logo"
import Map from "./components/Map"
import Socials from "./components/Socials"
import Foot from "./components/Foot"
import { Sub, SubText, SubHeading, Input, DispFlex } from "./components/Links"

const index = () => (
  <PageLayout bgColor="#000000" height="40vh">
    <PageWidth width="1500px" margin="0 0 0 0">
      <Responsive>
        <DispFlex>
          <Logo />
          <Sub>
            <SubHeading>Subscribe</SubHeading>
            <form action="">
              <Input placeholder="Email Adddress" />
            </form>
            <SubText>
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </SubText>
          </Sub>
          {/* <Links /> */}
          <Map />
        </DispFlex>
        <Socials />
        <Foot />
      </Responsive>
    </PageWidth>
  </PageLayout>
)

export default index
