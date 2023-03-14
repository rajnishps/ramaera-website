import React from "react";
import Navbar from "../components/Navbar/Navbar";

import Applicant from "./page/ApplicantSubmission/applicant";

const applicants = () => {
  return (
    <>
      <Navbar />
      <Applicant style={{ marginTop: "1000px" }} />
    </>
  );
};

export default applicants;
