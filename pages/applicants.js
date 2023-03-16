import Applicant from "./page/ApplicantSubmission/applicant"
import { useQuery } from "@apollo/client"
import { GetApplications } from "../apollo/queries";
import { useDispatch } from "react-redux";
import { applicantStorage } from "../state/slice/applicantDataSlice";

const applicants = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GetApplications)
  if(data){
    dispatch(applicantStorage(data.applicants));
  }
  return (
    <>
      <Applicant style={{ marginTop: "1000px" }} />
    </>
  )
}



export default applicants
