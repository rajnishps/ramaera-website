import Ramaera from "./page/ramaera"
import Navbar from "../components/Navbar/Navbar"
import Footer from "./page/footer"

const industries = () => {
  return (
    <>
      <Navbar selectedTab={"industries"} />
      <Ramaera imageIndex={1} />
      <Footer />
    </>
  )
}

export default industries
