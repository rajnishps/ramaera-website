import { FormWrapper } from "../ApplicantDetails/FormWrapper";

const applicantsDetails = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          background: "white",
          padding: "2rem",
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
            <p>Name</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Applicant's Email </label>
            <br />
            <p>Email</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Address</label>
            <br />
            <p>Address</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>State </label>
            <br />
            <p>State</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Pincode </label>
            <br />
            <p>Pincode</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Applicant's Mobile No. </label>
            <br />
            <p>Mobile</p>
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
            <p>Application</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Firm Name</label>
            <br />
            <p>Firm Name</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>State</label>
            <br />
            <p>State</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>District</label>
            <br />
            <p>District</p>
          </div>

          <div style={{ width: "500px", paddingTop: "7px", fontSize: "16px" }}>
            <br />
            <strong>Status:</strong>
            <br />
            Accepted
          </div>
        </FormWrapper>
      </div>
    </>
  );
};

export default applicantsDetails;
