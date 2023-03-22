import Navbar from "../../components/Navbar/Navbar"
import PageLayout from "../../components/PageLayout/PageLayout"
import PageWidth from "../../components/Width/PageWidth"
import Partner from "../page/Partner/AllPartner"
import Footer from "../page/common/footer"
const partner = () => {
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <div className="navSpace"></div>
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <Partner />
        </PageWidth>
        <hr style={{ borderBottom: "1px solid white", width: "80vw" }} />
        <Footer />
      </PageLayout>
    </>
  )
}

export default partner
