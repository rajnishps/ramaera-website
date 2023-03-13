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
  return (
    <>
      <FormWrapper title="Project Details">
        <div style={{ width: "500px" }}>
          <label>Your Project Type</label>
          <br />
          <input
            autoFocus
            required
            type="text"
            value={projectType}
            // onChange={(e) => updateFields({ street: e.target.value })}
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>You Are ?</label>
          <br />
          <input required type="text" value={youAre} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Type Of Partnership !!</label>
          <br />
          <input required type="text" value={partnership} />
        </div>
        <div style={{ width: "450px" }}>
          <label>Funding Type</label>
          <br />
          <input required type="text" value={funding} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Contribution Receiving Mode</label>
          <br />
          <input required type="text" value={contribution} />
        </div>
        <div style={{ width: "450px" }}>
          <label>Goal (INR)</label>
          <br />
          <input required type="text" value={goal} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Target For</label>
          <br />
          <input required type="text" value={target} />
        </div>
        <div style={{ width: "450px" }}>
          <label>Per Person Amount</label>
          <br />
          <input required type="text" value={personAmount} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Your Project Title</label>
          <br />
          <input required type="text" value={projectTitle} />
        </div>
        <div style={{ width: "450px" }}>
          <label>
            Brief about yourself & experience (minimum 30 character)*
          </label>
          <br />
          <input required type="text" value={brief} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Market Problem</label>
          <br />
          <input required type="text" value={marketProblem} />
        </div>
        <div style={{ width: "450px" }}>
          <label>Solution</label>
          <br />
          <input required type="text" value={solution} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Your Product</label>
          <br />
          <input required type="text" value={yourProduct} />
        </div>
        <div style={{ width: "450px" }}>
          <label>Business Model</label>
          <br />
          <input required type="text" value={businessModel} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Size of Market</label>
          <br />
          <input required type="text" value={sizeMarket} />
        </div>
        <div style={{ width: "450px" }}>
          <label>Current Trasaction</label>
          <br />
          <input required type="text" value={currentTrasaction} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Competitive Landscape</label>
          <br />
          <input required type="text" value={competitiveLandscape} />
        </div>
        <div style={{ width: "450px" }}>
          <label>Financial Projection</label>
          <br />
          <input required type="text" value={financialProjection} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Fund Need & Use</label>
          <br />
          <input required type="text" value={fundNeed} />
        </div>
        <div style={{ width: "450px" }}>
          <label>Equity Structure</label>
          <br />
          <input required type="text" value={equityStructure} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Exit Option</label>
          <br />
          <input required type="text" value={exitOption} />
        </div>
        <div style={{ width: "450px" }}>
          <label>Select Fundraising Type</label>
          <br />
          <input required type="text" value={fundraisingType} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Select Fundraising Stage</label>
          <br />
          <input required type="text" value={fundraisingStage} />
        </div>
        <div style={{ width: "450px" }}>
          <label>Select Funding Type</label>
          <br />
          <input required type="text" value={fundingType} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Funding Amount</label>
          <br />
          <input required type="text" value={fundingAmount} />
        </div>
        <div style={{ width: "450px" }}>
          <label>Funding Date</label>
          <br />
          <input required type="text" value={fundingDate} />
        </div>
      </FormWrapper>
    </>
  )
}
