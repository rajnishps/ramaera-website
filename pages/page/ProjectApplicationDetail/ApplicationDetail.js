import Link from "next/link"
import { FormWrapper } from "./FormWrapper"
import { Container } from "./ApplicationDetailStyle.js"

const ApplicationDetail = ({ ProjectData }) => {
  console.log(ProjectData)
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
                style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
              >
                Basic Details
              </label>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}></div>
            <hr className="lineHr1" />
            <hr className="lineHr2" />
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Name </label>
              <br />
              <p>{ProjectData.name}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label> Email </label>
              <br />
              <p>{ProjectData.email}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Contact No </label>
              <br />
              <p>{ProjectData.contactNo}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Date Of Birth </label>
              <br />
              <p>{ProjectData.dob} </p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Country</label>
              <br />
              <p>{ProjectData.country}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>State </label>
              <br />
              <p>{ProjectData.state} </p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>City </label>
              <br />
              <p>{ProjectData.city} </p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Occupation </label>
              <br />
              <p>{ProjectData.occupation} </p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Director Name </label>
              <br />
              <p>{ProjectData.director[0]} </p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              {ProjectData.director[1] && (
                <>
                  <label>Basic Introduction </label>
                  <br />
                  <p>{ProjectData.director[1]} </p>
                </>
              )}
            </div>
            {ProjectData.director[2] && (
              <>
                <div className="divResponsive" style={{ width: "500px" }}>
                  <label>Director Name </label>
                  <br />
                  <p>{ProjectData.director[2]} </p>
                </div>
                <div className="divResponsive" style={{ width: "450px" }}>
                  <label>Basic Introduction </label>
                  <br />
                  <p>{ProjectData.director[3]} </p>
                </div>
              </>
            )}
            {ProjectData.director[4] && (
              <>
                <div className="divResponsive" style={{ width: "500px" }}>
                  <label>Director Name </label>
                  <br />
                  <p>{ProjectData.director[4]} </p>
                </div>
                <div className="divResponsive" style={{ width: "450px" }}>
                  <label>Basic Introduction </label>
                  <br />
                  <p>{ProjectData.director[5]} </p>
                </div>
              </>
            )}

            <div
              className="divResponsive"
              style={{ width: "450px", marginTop: "30px" }}
            >
              <label
                style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
              >
                Project Details
              </label>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}></div>
            <hr className="lineHr1" />
            <hr className="lineHr2" />
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Project Title </label>
              <br />
              <p>{ProjectData.projectTitle}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label> Project Type</label>
              <br />
              <p>{ProjectData.projectType}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>You Are</label>
              <br />
              <p>{ProjectData.youAre}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Partnership Type</label>
              <br />
              <p>{ProjectData.PartnershipType}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Funding Type</label>
              <br />
              <p>{ProjectData.fundingType}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Receiving Mode</label>
              <br />
              <p>{ProjectData.receivingMode}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Amount Goal</label>
              <br />
              <p>{ProjectData.amountGoal}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Number of Partner</label>
              <br />
              <p>{ProjectData.targetPartner}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label> Per Person Amount</label>
              <br />
              <p>{ProjectData.perPersonAmount}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Brief About</label>
              <br />
              <p>{ProjectData.briefAbout}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Market Problem</label>
              <br />
              <p>{ProjectData.marketProblem}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Solution</label>
              <br />
              <p>{ProjectData.solution}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>About Product</label>
              <br />
              <p>{ProjectData.product}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Business Model</label>
              <br />
              <p>{ProjectData.businessModel}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Size of Market</label>
              <br />
              <p>{ProjectData.sizeMarket}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Current Trasaction</label>
              <br />
              <p>{ProjectData.currentTrasaction}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Competitive Landscape</label>
              <br />
              <p>{ProjectData.competitiveLandscape}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Financial Projection</label>
              <br />
              <p>{ProjectData.financialProjection}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Fund Need & Use</label>
              <br />
              <p>{ProjectData.fundNeed}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Equity Structure</label>
              <br />
              <p>{ProjectData.equityStructure}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Exit Option</label>
              <br />
              <p>{ProjectData.exitOption}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Fundraising Type</label>
              <br />
              <p>{ProjectData.fundraisingType}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Fundraising Stage</label>
              <br />
              <p>{ProjectData.fundraisingStage}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Funding Type</label>
              <br />
              <p>{ProjectData.fundingType}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Funding Amount</label>
              <br />
              <p>{ProjectData.fundingAmount}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Funding Date</label>
              <br />
              <p>{ProjectData.fundingDate}</p>
            </div>

            <div
              className="divResponsive"
              style={{ width: "450px", marginTop: "30px" }}
            >
              <label
                style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
              >
                Finish Details
              </label>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}></div>
            <hr className="lineHr1" />
            <hr className="lineHr2" />
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>LinkedIn Profile </label>
              <br />
              <p>{ProjectData.LinkedInProfile}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label> Facebook Profile</label>
              <br />
              <p>{ProjectData.facebookProfile}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label> Twitter Profile</label>
              <br />
              <p>{ProjectData.twitterProfile}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Instagram Profile</label>
              <br />
              <p>{ProjectData.instagramProfile}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Website URL </label>
              <br />
              <p>{ProjectData.websiteURL}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Thanks Note</label>
              <br />
              <p>{ProjectData.thanksNote}</p>
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
