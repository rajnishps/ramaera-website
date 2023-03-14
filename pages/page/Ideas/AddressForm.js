import { useState, useEffect } from "react"
import { FormWrapper } from "./FormWrapper"

export function AddressForm({
  youAre,
  partnership,
  funding,
  contribution,
  goal,
  target,
  personAmount,
  projectTitle,
  brief,
  marketProblem,
  solution,
  yourProduct,
  businessModel,
  sizeMarket,
  currentTrasaction,
  competitiveLandscape,
  financialProjection,
  fundNeed,
  equityStructure,
  exitOption,
  projectType,
  fundraisingType,
  fundraisingStage,
  fundingType,
  fundingAmount,
  fundingDate,
}) {
  const [show, setShow] = useState(false)
  const [perPersonAmount, setPerPersonAmount] = useState(0)
  const [totalPeople, setTotalPeople] = useState(1)
  const [goalAmount, setGoalAmount] = useState(0)

  const changeTotalPeople = (val) => {
    setTotalPeople(val)
  }
  const changeGoalAmount = (val) => {
    setGoalAmount(val)
  }
  const changeAmount = () => {
    console.log("total people", totalPeople, "goal amount", goalAmount)
    setPerPersonAmount(goalAmount / totalPeople)
  }
  useEffect(() => {
    changeAmount()
  }, [totalPeople, totalPeople])
  return (
    <>
      <FormWrapper number={1} title="Project Details">
        <div style={{ width: "500px" }}>
          <label>Your Project Type</label>
          <br />
          <select>
            <option disabled selected>
              Select Project Type
            </option>
            <option value={projectType}>Startup</option>
            <option value={projectType}>Existing</option>
          </select>
        </div>
        <div style={{ width: "450px" }}>
          <label>You Are ?</label>
          <select>
            <option disabled selected>
              Select
              <br />
            </option>
            <option value={youAre}>Individual</option>
            <option value={youAre}>Company</option>
            <option value={youAre}>Registered NGO</option>
          </select>
        </div>
        <div style={{ width: "500px" }}>
          <label>Type Of Partnership !!</label>
          <select>
            <option disabled selected>
              Select Partnership
              <br />
            </option>
            <option value={partnership}>Equity Base</option>
            <option value={partnership}>Debt/Loan</option>
          </select>
        </div>
        <div style={{ width: "450px" }}>
          <label>Funding Type</label>
          <br />
          <input type="text" value={funding} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Contribution Receiving Mode</label>
          <select>
            <br />
            <option disabled selected>
              Select Project Type
            </option>
            <option value={contribution}>INR</option>
          </select>
        </div>
        <div style={{ width: "450px" }}>
          <label>Goal (INR)</label>
          <br />

          <input
            onChange={(e) => changeGoalAmount(e.target.value)}
            type="number"
            placeholder="Numerical value only"
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Target For</label>
          <br />
          <input
            onChange={(e) => changeTotalPeople(e.target.value)}
            type="number"
            placeholder="Number of Partners"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Per Person Amount</label>
          <br />
          <input disable type="text" value={perPersonAmount} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Your Project Title</label>
          <br />
          <input
            type="text"
            value={projectTitle}
            placeholder="I am offering for Partnership"
          />
        </div>
        <div style={{ width: "450px" }}></div>
        <div style={{ width: "500px" }}>
          <label>
            Brief about yourself & experience (minimum 30 character)*
          </label>
          <br />
          <textarea
            value={brief}
            rows={5}
            cols={60}
            placeholder="Brief about yourself..."
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Market Problem</label>
          <br />
          <textarea
            value={marketProblem}
            rows={5}
            cols={60}
            placeholder="Describe here..."
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Solution</label>
          <br />
          <textarea
            value={solution}
            rows={5}
            cols={60}
            placeholder="Brief Story about your Solution/Product.      (Minimum 100 character)*"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Your Product</label>
          <br />
          <textarea
            value={yourProduct}
            rows={5}
            cols={60}
            placeholder="How your Product help to peoples"
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Business Model</label>
          <br />
          <textarea
            value={businessModel}
            rows={5}
            cols={60}
            placeholder="Describe here ..."
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Size of Market</label>
          <br />
          <textarea
            value={sizeMarket}
            rows={5}
            cols={60}
            placeholder="Describe here size of the market you are targeting"
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Current Trasaction</label>
          <br />
          <textarea
            value={currentTrasaction}
            rows={5}
            cols={60}
            placeholder="Please describe the current traction if any achivement you have already accomplished"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Competitive Landscape</label>
          <br />
          <textarea
            rows={5}
            cols={60}
            value={competitiveLandscape}
            placeholder="Describe here your compatitors landscape"
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Financial Projection</label>
          <br />
          <textarea
            rows={5}
            cols={60}
            value={financialProjection}
            placeholder="Capex , Opex , Revenue"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Fund Need & Use</label>
          <br />
          <textarea
            rows={5}
            cols={60}
            value={fundNeed}
            placeholder="Goal , and Use of fund"
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Equity Structure</label>
          <br />
          <textarea
            rows={5}
            cols={60}
            value={equityStructure}
            placeholder="Please describe the Percentage (Funders %, Your %) after all expanses"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Exit Option</label>
          <br />
          <textarea
            rows={5}
            cols={60}
            value={exitOption}
            placeholder="Describe here ..."
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Select Fundraising Type</label>
          <select>
            <option disabled selected>
              Select Mode
            </option>
            <option value={fundraisingType}>Equity Base</option>
            <option value={fundraisingType}>Bank Loan</option>
          </select>
        </div>
        <div style={{ width: "450px" }}></div>

        <div
          style={{
            display: "flex",
            width: "500px",
            flexDirection: "column",
          }}
        >
          <h5 style={{ padding: "10px 0" }}>
            Previous Raised History if any = Select "YES"
          </h5>
          <div
            style={{
              display: "flex",
              width: "200px",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <input
                type="radio"
                value="yes"
                name="gender"
                onClick={() => setShow(true)}
              />
              <label>Yes</label>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <input
                type="radio"
                value="no"
                name="gender"
                onClick={() => setShow(false)}
              />{" "}
              <label>No</label>
            </div>
          </div>
        </div>

        <div style={{ width: "450px" }}></div>

        {show && (
          <div style={{ width: "500px" }}>
            <label>Select Fundraising Stage</label>
            <select>
              <br />
              <option disabled selected>
                Select Stage
              </option>
              <option value={fundraisingStage}>Pre-Seed</option>
              <option value={fundraisingStage}>Seed</option>
            </select>
          </div>
        )}
        {show && (
          <div style={{ width: "450px" }}>
            <label>Select Funding Type</label>
            <select>
              <option disabled selected>
                Select Stage
                <br />
              </option>
              <option value={fundingType}>Equity</option>
              <option value={fundingType}>Debt</option>
            </select>
          </div>
        )}
        {show && (
          <div style={{ width: "500px" }}>
            <label>Funding Amount</label>
            <br />
            <input type="text" value={fundingAmount} />
          </div>
        )}
        {show && (
          <div style={{ width: "450px" }}>
            <label>Funding Date</label>
            <br />
            <input type="date" value={fundingDate} />
          </div>
        )}
      </FormWrapper>
    </>
  )
}
