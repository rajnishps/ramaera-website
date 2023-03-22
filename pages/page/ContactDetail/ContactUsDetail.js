import Link from "next/link"
import { FormWrapper } from "./FormWrapper"
import { Container } from "./ContactUsDetailStyle.js"

const ApplicationDetail = ({ ContactUsData }) => {
  try {
    return (
      <>
        <Container>
          <FormWrapper>
            <div
              className="divResponsive"
              tyle={{ width: "500px", marginTop: "30px" }}
            >
              <label
                style={{ fontSize: "1.3rem", opacity: ".9", fontWeight: "600" ,color:"#5a5a5a"}}
                >
                Contact Us Details
              </label>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}></div>
            <hr className="lineHr1" />
            <hr className="lineHr2" />
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Name </label>
              <br />
              <p>{ContactUsData.name}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label> Email </label>
              <br />
              <p>{ContactUsData.email}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Company</label>
              <br />
              <p>{ContactUsData.company}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Subject </label>
              <br />
              <p>{ContactUsData.Subject} </p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Message</label>
              <br />
              <p>{ContactUsData.message}</p>
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

export default ApplicationDetail
