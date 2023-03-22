import Link from "next/link"
import { FormWrapper } from "./FormWrapper"
import { Container } from "./applicantsDetailsStyle.js"

const applicantsDetails = ({ AppData }) => {
  try {
    return (
      <>
        <Container>
          <FormWrapper>
            <div
              className="divResponsive"
              style={{ width: "500px", marginTop: "30px" }}
            >
              <label
                style={{ fontSize: "1.3rem", opacity: ".9", fontWeight: "600" ,color:"#5a5a5a"}}
              >
                Personal Details
              </label>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}></div>
            <hr className="lineHr1" />
            <hr className="lineHr2" />
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Applicant's Name </label>
              <br />
              <p>{AppData.name}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Applicant's Email </label>
              <br />
              <p>{AppData.email}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Address</label>
              <br />
              <p>{AppData.applicantAddress}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>State </label>
              <br />
              <p>{AppData.applicantState} </p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Pincode </label>
              <br />
              <p>{AppData.applicantPin} </p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Applicant's Mobile No. </label>
              <br />
              <p>{AppData.mobileNumber}</p>
            </div>
            <div
              className="divResponsive"
              style={{ width: "500px", marginTop: "30px" }}
            >
              <label
                style={{ fontSize: "1.3rem", opacity: ".9", fontWeight: "600" ,color:"#5a5a5a"}}
                >
                Application Details
              </label>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}></div>
            <hr className="lineHr1" />
            <hr className="lineHr2" />
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Application </label>
              <br />
              <p>{AppData.applicantType}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Firm Name</label>
              <br />
              <p>{AppData.applicantType}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>State</label>
              <br />
              <p>{AppData.State}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>District</label>
              <br />
              <p>{AppData.District}</p>
            </div>

            <div className="divResponsive" style={{ width: "450px" }}>
              <label
                style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
              >
                Status
              </label>
              <br />
              <select>
                <option disabled selected>
                  Select Status
                </option>
                <option value={"pending"}>Pending</option>
                <option value={"approval"}>Approval </option>
                <option value={"rejected"}>Rejected </option>
              </select>
            </div>
          </FormWrapper>
        </Container>
      </>
    )
  } catch {
    return (
      <>
        <Link
          style={{
            color: "white",
          }}
          href=" /Login"
        >
          Login to continue
        </Link>
      </>
    )
  }
}

export default applicantsDetails
