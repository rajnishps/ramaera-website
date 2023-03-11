import Navbar from "../components/Navbar/Navbar"
import PageLayout from "../components/PageLayout/PageLayout"
import PageWidth from "../components/Width/PageWidth"
import Ideas from "./ideas"

const idea = () => {
  return (
    <>
      <PageLayout
        paddingTop="200px"
        paddingBottom="450px"
        mheight="100vh"
        height="120vh"
      >
        <Navbar />
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <Ideas />
        </PageWidth>
      </PageLayout>
    </>
  )
}

export default idea
