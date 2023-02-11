import Ramaera from "./page/common/ramaera"
import Navbar from "../components/Navbar/Navbar"
import Footer from "./page/common/footer"

const companies = () => {
  return (
    <>
      <Navbar selectedTab={"companies"} />
      <Ramaera imageIndex={2} />
      <Footer />
    </>
  )
}

export default companies
