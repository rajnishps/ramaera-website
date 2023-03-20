import { FormWrapper } from "./FormWrapper"
import {Container} from "./ApplicationDetailStyle.js"

const ApplicationDetail = (props) => {
  return (
    <>
      <Container >
        <FormWrapper>
          <div style={{ width: "500px", marginTop: "30px" }}>
            <label
              style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
            >
              Basic Details 
            </label>
          </div>
          <div style={{ width: "450px" }}></div>
          <hr className="lineHr1"/>
          <hr className="lineHr2"/>
          <div style={{ width: "500px" }}>
            <label>Name </label>
            <br />
            <p>{props.name}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label> Email </label>
            <br />
            <p>{props.email}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Contact No </label>
            <br />
            <p>{props.contactNo}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Date Of Birth </label>
            <br />
            <p>{props.dob} </p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Country</label>
            <br />
            <p>{props.country}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>State </label>
            <br />
            <p>{props.state} </p>
          </div>
          <div style={{ width: "500px" }}>
            <label>City </label>
            <br />
            <p>{props.city} </p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Occupation </label>
            <br />
            <p>{props.occupation} </p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Director Name </label>
            <br />
            <p>{props.directorName} </p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Basic Introduction </label>
            <br />
            <p>{props.introduction} </p>
          </div>

          <div style={{ width: "450px", marginTop: "30px" }}>
            <label
              style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
            >
              Project Details
            </label>
          </div>
          <div style={{ width: "450px" }}></div>
          <hr  className="lineHr1"/>
          <hr  className="lineHr2"/>
          <div style={{ width: "500px" }}>
            <label>Project Title </label>
            <br />
            <p>{props.projectTitle}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label> Project Type</label>
            <br />
            <p>{props.projectType}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>You Are</label>
            <br />
            <p>{props.youAre}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Partnership Type</label>
            <br />
            <p>{props.PartnershipType}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Funding Type</label>
            <br />
            <p>{props.fundingType}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Receiving Mode</label>
            <br />
            <p>{props.receivingMode}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Amount Goal</label>
            <br />
            <p>{props.amountGoal}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Number of Partner</label>
            <br />
            <p>{props.targetPartner}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label> Per Person Amount</label>
            <br />
            <p>{props.perPersonAmount}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Brief About</label>
            <br />
            <p>{props.briefAbout}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Market Problem</label>
            <br />
            <p>{props.marketProblem}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Solution</label>
            <br />
            <p>{props.solution}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>About Product</label>
            <br />
            <p>{props.product}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Business Model</label>
            <br />
            <p>{props.businessModel}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Size of Market</label>
            <br />
            <p>{props.sizeMarket}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Current Trasaction</label>
            <br />
            <p>{props.currentTrasaction}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Competitive Landscape</label>
            <br />
            <p>{props.competitiveLandscape}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Financial Projection</label>
            <br />
            <p>{props.financialProjection}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Fund Need & Use</label>
            <br />
            <p>{props.fundNeed}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Equity Structure</label>
            <br />
            <p>{props.equityStructure}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Exit Option</label>
            <br />
            <p>{props.exitOption}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Fundraising Type</label>
            <br />
            <p>{props.fundraisingType}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Fundraising Stage</label>
            <br />
            <p>{props.fundraisingStage}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Funding Type</label>
            <br />
            <p>{props.fundingType}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Funding Amount</label>
            <br />
            <p>{props.fundingAmount}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Funding Date</label>
            <br />
            <p>{props.fundingDate}</p>
          </div>


          <div style={{ width: "450px", marginTop: "30px" }}>
            <label
              style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
            >
              Finish Details
            </label>
          </div>
          <div style={{ width: "450px" }}></div>
          <hr  className="lineHr1"/>
          <hr className="lineHr2"/>

          <div style={{ width: "500px" }}>
            <label>LinkedIn Profile </label>
            <br />
            <p>{props.LinkedInProfile}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label> Facebook Profile</label>
            <br />
            <p>{props.facebookProfile}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label> Twitter Profile</label>
            <br />
            <p>{props.twitterProfile}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Instagram Profile</label>
            <br />
            <p>{props.instagramProfile}</p>
          </div>
          <div style={{ width: "500px" }}>
            <label>Website URL </label>
            <br />
            <p>{props.websiteURL}</p>
          </div>
          <div style={{ width: "450px" }}>
            <label>Thanks Note</label>
            <br />
            <p>{props.thanksNote}</p>
          </div>

        
        </FormWrapper>
      </Container>
    </>
  )
}

export default ApplicationDetail
