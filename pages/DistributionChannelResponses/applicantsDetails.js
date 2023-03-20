import Link from "next/link"
import { FormWrapper } from "./FormWrapper"

const applicantsDetails = ({ AppData }) => {
  try {
    return (
      <>
        <div
          style={{
            position: "relative",
            background: "white",
            padding: "2rem 2rem 3.5rem 2rem",
            margin: "1rem",
            borderRadius: ".5rem",
            maxWidth: "max-content",
            color: "black",
          }}
        >
          <FormWrapper>
            <div style={{ width: "500px", marginTop: "30px" }}>
              <label
                style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
              >
                Personal Details
              </label>
            </div>
            <div style={{ width: "450px" }}></div>
            <hr />
            <hr />
            <div style={{ width: "500px" }}>
              <label>Applicant's Name </label>
              <br />
              <p>{AppData.name}</p>
            </div>
            <div style={{ width: "450px" }}>
              <label>Applicant's Email </label>
              <br />
              <p>{AppData.email}</p>
            </div>
            <div style={{ width: "500px" }}>
              <label>Address</label>
              <br />
              <p>{AppData.applicantAddress}</p>
            </div>
            <div style={{ width: "450px" }}>
              <label>State </label>
              <br />
              <p>{AppData.applicantState} </p>
            </div>
            <div style={{ width: "500px" }}>
              <label>Pincode </label>
              <br />
              <p>{AppData.applicantPin} </p>
            </div>
            <div style={{ width: "450px" }}>
              <label>Applicant's Mobile No. </label>
              <br />
              <p>{AppData.mobileNumber}</p>
            </div>
            <div style={{ width: "500px", marginTop: "30px" }}>
              <label
                style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
              >
                Application Details
              </label>
            </div>
            <div style={{ width: "450px" }}></div>
            <hr />
            <hr />
            <div style={{ width: "500px" }}>
              <label>Application </label>
              <br />
              <p>{AppData.applicantType}</p>
            </div>
            <div style={{ width: "450px" }}>
              <label>Firm Name</label>
              <br />
              <p>{AppData.applicantType}</p>
            </div>
            <div style={{ width: "500px" }}>
              <label>State</label>
              <br />
              <p>{AppData.State}</p>
            </div>
            <div style={{ width: "450px" }}>
              <label>District</label>
              <br />
              <p>{AppData.District}</p>
            </div>

            <div style={{ width: "450px" }}>
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
        </div>
      </>
    )
  } catch {
    return (
      <>
        <Link
          style={{
            color: "white",
          }}
          href="/login"
        >
          Login to continue
        </Link>
      </>
    )
  }
}

export default applicantsDetails
