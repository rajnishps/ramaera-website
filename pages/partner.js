import Navbar from "../components/Navbar/Navbar"
import PageLayout from "../components/PageLayout/PageLayout"
import PageWidth from "../components/Width/PageWidth"
import Partner from "./page/Partner/AllPartner"

const partner = () => {
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <Partner />
        </PageWidth>
      </PageLayout>
    </>
  )
}

export default partner
