import { FormWrapper } from "../ApplicantDetails/FormWrapper"

const applicantsDetails = (props) => {
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
            <p>{props.name}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Applicant's Email </label>
            <br />
            <p>{props.email}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Address</label>
            <br />
            <p>{props.applicantAddress}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>State </label>
            <br />
            <p>{props.applicantState} </p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Pincode </label>
            <br />
            <p>{props.applicantPin} </p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Applicant's Mobile No. </label>
            <br />
            <p>{props.mobileNumber}</p>
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
            <p>{props.applicantType}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Firm Name</label>
            <br />
            <p>{props.applicantType}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>State</label>
            <br />
            <p>{props.State}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>District</label>
            <br />
            <p>{props.District}</p>
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
}

export default applicantsDetails
