import Footer from "../page/common/footer"
import LegalSection from "../page/LegalPage/LegalSection"
import Navbar from "../../components/Navbar/Navbar"

const legal = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "150px" }}></div>
      <LegalSection />
      <Footer />
    </>
  )
}

export default legal
