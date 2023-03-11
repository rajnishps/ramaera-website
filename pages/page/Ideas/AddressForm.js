import { FormWrapper } from "./FormWrapper";

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
    <FormWrapper title="Address">
      <label>Your Project Type</label>
      <input
        autoFocus
        required
        type="text"
        value={projectType}
        // onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>You Are ?</label>
      <input required type="text" value={youAre} />

      <label>Type Of Partnership !!</label>
      <input required type="text" value={partnership} />

      <label>Funding Type</label>
      <input required type="text" value={funding} />

      <label>Contribution Receiving Mode</label>
      <input required type="text" value={contribution} />

      <label>Goal (INR)</label>
      <input required type="text" value={goal} />

      <label>Target For</label>
      <input required type="text" value={target} />

      <label>Per Person Amount</label>
      <input required type="text" value={personAmount} />

      <label>Your Project Title</label>
      <input required type="text" value={projectTitle} />

      <label>Brief about yourself & experience (minimum 30 character)*</label>
      <input required type="text" value={brief} />

      <label>Market Problem</label>
      <input required type="text" value={marketProblem} />

      <label>Solution</label>
      <input required type="text" value={solution} />

      <label>Your Product</label>
      <input required type="text" value={yourProduct} />

      <label>Business Model</label>
      <input required type="text" value={businessModel} />

      <label>Size of Market</label>
      <input required type="text" value={sizeMarket} />

      <label>Current Trasaction</label>
      <input required type="text" value={currentTrasaction} />

      <label>Competitive Landscape</label>
      <input required type="text" value={competitiveLandscape} />

      <label>Financial Projection</label>
      <input required type="text" value={financialProjection} />

      <label>Fund Need & Use</label>
      <input required type="text" value={fundNeed} />

      <label>Equity Structure</label>
      <input required type="text" value={equityStructure} />

      <label>Exit Option</label>
      <input required type="text" value={exitOption} />

      <label>Select Fundraising Type</label>
      <input required type="text" value={fundraisingType} />

      <label>Select Fundraising Stage</label>
      <input required type="text" value={fundraisingStage} />

      <label>Select Funding Type</label>
      <input required type="text" value={fundingType} />

      <label>Funding Amount</label>
      <input required type="text" value={fundingAmount} />

      <label>Funding Date</label>
      <input required type="text" value={fundingDate} />
    </FormWrapper>
  );
}
