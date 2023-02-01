import React from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import { Responsive } from "./components/Style"
import Links from "./components/Links"
import Logo from "./components/Logo"
import Map from "./components/Map"
import Socials from "./components/Socials"
import Foot from "./components/Foot"

const index = () => (
  <PageLayout bgColor="#000000" height="40vh">
    <PageWidth width="1500px" margin="0 0 0 0">
      <Responsive>
        <Logo />
        <Links />
        <Map />
        <Socials />
        <Foot />
      </Responsive>
    </PageWidth>
  </PageLayout>
)

export default index
