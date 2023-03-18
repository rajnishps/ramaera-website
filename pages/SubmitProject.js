import Navbar from "../components/Navbar/Navbar"
import PageLayout from "../components/PageLayout/PageLayout"
import PageWidth from "../components/Width/PageWidth"
import Ideas from "./page/Ideas/allIdea"

const idea = () => {
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <div style={{ height: "200px" }}></div>
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <Ideas />
        </PageWidth>
      </PageLayout>
    </>
  )
}

export default idea
