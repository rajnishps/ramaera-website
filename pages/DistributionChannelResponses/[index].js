import Navbar from "../../components/Navbar/Navbar"
import PageLayout from "../../components/PageLayout/PageLayout"
import PageWidth from "../../components/Width/PageWidth"
import ApplicantsDetails from "./applicantsDetails"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import Link from "next/link"

const applicantDetail = () => {
  const applicantdata = useSelector((state) => state.applicationData.appData)
  const router = useRouter()
  const { index } = router.query
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <div style={{ height: "200px" }}></div>
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <ApplicantsDetails AppData={applicantdata[index - 1]} />
        </PageWidth>
      </PageLayout>
    </>
  )
}

export default applicantDetail
