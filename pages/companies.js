import Ramaera from "./page/ramaera"
import Navbar from "../components/Navbar/Navbar"
import Footer from "./page/footer"

const companies = () => {
  return (
    <>
      <Navbar />
      <Ramaera imageIndex={2} />
      <Footer />
    </>
  )
}

export default companies
