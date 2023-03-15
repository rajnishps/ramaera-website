import React from "react"
import Navbar from "../components/Navbar/Navbar"
import PageLayout from "../components/PageLayout/PageLayout"
import PageWidth from "../components/Width/PageWidth"
import ApplicantsDetails from "./page/ApplicantDetails/applicantsDetails"

const applicantDetail = () => {
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <div style={{ height: "200px" }}></div>
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <ApplicantsDetails
            name="randomuser"
            applicantType="STOCKIST"
            applicantPin="800001"
            applicantState="Bihar"
            applicantAddress="erfr"
            email="sgersfvcdc@gmail.com"
            firmName="eafvdfgergvinc"
            mobileNumber="734790802"
            District="Bu43xor"
            State="Bihar"
          />
        </PageWidth>
      </PageLayout>
    </>
  )
}

export default applicantDetail
