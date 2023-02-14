import Navbar from "../components/Navbar/Navbar"
import Footer from "./page/common/footer"
import Ramaera from "./page/common/ramaera"
import Investment from "./page/page4/investment"
import Empower from "./page/page4/empower"
import Dev from "./page/page4/dev"
import Product from "./page/page4/product"
import Marketing from "./page/page4/marketing"
import Talent from "./page/page4/talent"
import Family from "./page/page4/family"
import styled from "styled-components"

const career = () => {
  return (
    <>
      <Navbar selectedTab={"career"} />
      <Ramaera imageIndex={3} />
      <Investment />
      <Marketing />
      <Dev />
      <Product />
      <Talent />
      <Family />
      <Empower />
      <Footer />
    </>
  )
}

export default career
