import Head from "../page/Terms/Head/index"
import Section from "../page/Terms/Section/index"
import Footer from "../page/common/footer"
import Navbar from "../../components/Navbar/Navbar"

const terms = () => {
  return (
    <>
      <Navbar />
      <div className="termSpaceTop"></div>
      {/* <Head /> */}
      <Section />
      <Footer />
    </>
  )
}

export default terms
