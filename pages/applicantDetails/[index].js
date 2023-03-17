import Navbar from "../../components/Navbar/Navbar"
import PageLayout from "../../components/PageLayout/PageLayout"
import PageWidth from "../../components/Width/PageWidth"
import ApplicantsDetails from "./applicantsDetails"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

const applicantDetail = () => {
  const applicantdata = useSelector((state) => state.applicationData.appData)
  const router = useRouter()
  const { pid } = router.query
  const pidd = pid - 1

  console.log("fcwdfffe", applicantdata[pidd])
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <div style={{ height: "200px" }}></div>
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <ApplicantsDetails />
        </PageWidth>
      </PageLayout>
    </>
  )
}

export default applicantDetail
