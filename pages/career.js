import Navbar from "../components/Navbar/Navbar"
import Footer from "./page/common/footer"
import Ramaera from "./page/common/ramaera"
import Investment from "./page/page4/investment"

const career = () => {
  return (
    <>
      <Navbar selectedTab={"career"} />
      <Ramaera imageIndex={3} />
      <Investment />
      <Footer />
    </>
  )
}

export default career
