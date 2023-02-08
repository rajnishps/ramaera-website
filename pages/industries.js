import Ramaera from "./page/ramaera"
import Navbar from "../components/Navbar/Navbar"
import Footer from "./page/footer"

const companies = () => {
  return (
    <>
      <Navbar />
      <Ramaera imageIndex={1} />
      <Footer />
    </>
  )
}

export default companies
