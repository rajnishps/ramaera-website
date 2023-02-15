import Ramaera from "./page/common/ramaera"
import Navbar from "../components/Navbar/Navbar"
import Footer from "./page/common/footer"
import Innovation from "../components/Innovation/Innovation"
import Innitiatives from "../components/Innitiatives/Innitiatives"
import Values from "../components/Values/Values"
import Contribution from "../components/Contribution/Contribution"

const companies = () => {
  return (
    <>
      <Navbar selectedTab={"companies"} />
      <Ramaera imageIndex={2} />
      <Innovation/>
      <Innitiatives/>
      <Values/>
      <Contribution/>
      <Footer />
    </>
  )
}

export default companies
